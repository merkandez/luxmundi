import { Request, Response } from 'express';
import { encrypt, compare } from '../utils/handlePassword';
import { tokenSign } from '../utils/handleJwt';
import User from '../models/userModel';

// Controlador de registro de usuario con avatar opcional
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password, avatarUrl } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: '📧El correo ya está en uso' });
      return;
    }

    const hashedPassword = await encrypt(password); // Usamos la función encrypt
    const newUser = await User.create({ username, email, password: hashedPassword, avatarUrl });
    res.status(201).json({ message: '✅Usuario registrado con éxito', user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: '❗Error en el servidor', error: error.message });
    } else {
      res.status(500).json({ message: '❗Error en el servidor', error });
    }
  }
};

// Controlador de inicio de sesión
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: '❌Credenciales incorrectas' });
      return;
    }

    const isMatch = await compare(password, user.password); // Usamos la función compare
    if (!isMatch) {
      res.status(400).json({ message: '❌Credenciales incorrectas' });
      return;
    }

    const token = tokenSign(user); // Generamos el token JWT
    res.json({ message: '✅Inicio de sesión exitoso', token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: '❗Error en el servidor', error: error.message });
    } else {
      res.status(500).json({ message: '❗Error en el servidor', error });
    }
  }
};
// Controlador para actualizar datos del usuario (incluyendo rol, si es admin)

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;  // El ID del usuario que se va a actualizar
  const { username, email, password, avatarUrl, role } = req.body;
  const userRole = (req as any).user; // Usuario que realiza la solicitud

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: '❎Usuario no encontrado' });
      return;
    }

    // Solo un admin puede actualizar el rol
    if (role && userRole.role !== 'admin') {
      res.status(403).json({ message: '🚫No autorizado para cambiar el rol' });
      return;
    }

    // Si hay una nueva contraseña, la encriptamos
    if (password) {
      const hashedPassword = await encrypt(password);
      user.password = hashedPassword;
    }

    // Actualizar los datos
    await user.update({
      username,
      email,
      avatarUrl,
      role: userRole.role === 'admin' ? role : user.role // Solo cambia el rol si es admin
    });

    res.json({ message: '✅Usuario actualizado con éxito', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: '❗Error al actualizar usuario', error: error.message });
    }
  }
};
// Controlador para eliminar un usuario (solo administradores)
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ message: '❗Usuario no encontrado' });
      return;
    }

    // Eliminar el usuario
    await user.destroy();
    res.json({ message: '✅Usuario eliminado con éxito' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: '❌Error al eliminar el usuario', error: error.message });
    }
  }
};

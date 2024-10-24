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
      res.status(400).json({ message: 'El correo ya está en uso' });
      return;
    }

    const hashedPassword = await encrypt(password); // Usamos la función encrypt
    const newUser = await User.create({ username, email, password: hashedPassword, avatarUrl });
    res.status(201).json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error en el servidor', error: error.message });
    } else {
      res.status(500).json({ message: 'Error en el servidor', error });
    }
  }
};

// Controlador de inicio de sesión
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: 'Credenciales incorrectas' });
      return;
    }

    const isMatch = await compare(password, user.password); // Usamos la función compare
    if (!isMatch) {
      res.status(400).json({ message: 'Credenciales incorrectas' });
      return;
    }

    const token = tokenSign(user); // Generamos el token JWT
    res.json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error en el servidor', error: error.message });
    } else {
      res.status(500).json({ message: 'Error en el servidor', error });
    }
  }
};
// Controlador para actualizar datos del usuario
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = (req as any).user;  // Extraemos el ID del usuario logueado
  const { username, email, password, avatarUrl } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    // Si hay un nuevo password, lo encriptamos
    if (password) {
      const hashedPassword = await encrypt(password);
      user.password = hashedPassword;
    }

    // Actualizamos los datos
    await user.update({ username, email, avatarUrl });
    res.json({ message: 'Datos actualizados con éxito', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
    }
  }
};
// Controlador para actualizar rol del usuario (solo para administradores)
export const updateUserRole = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;  // ID del usuario cuyo rol se va a cambiar
  const { role } = req.body;  // El nuevo rol a asignar

  if (role !== 'admin' && role !== 'user') {
    res.status(400).json({ message: 'Rol no válido' });
    return;
  }

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    await user.update({ role });
    res.json({ message: 'Rol actualizado con éxito', user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al actualizar rol', error: error.message });
    }
  }
};

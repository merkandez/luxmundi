import { Request, Response } from 'express';
import { encrypt, compare } from '../utils/handlePassword';
import { tokenSign } from '../utils/handleJwt';
import User from '../models/userModel';

// Controlador de registro de usuario con avatar opcional
export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { username, email, password, avatarUrl } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'El correo ya está en uso' });
      return;
    }

    const hashedPassword = await encrypt(password); // Usamos la función encrypt
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      avatarUrl,
    });
    res
      .status(201)
      .json({ message: 'Usuario registrado con éxito', user: newUser });
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: 'Error en el servidor', error: error.message });
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
    const role = user.role; // Extraemos el rol del usuario
    const userId = user.id; // Extraemos el ID del usuario

    // Incluimos `userId` en la respuesta
    res.json({ message: 'Inicio de sesión exitoso', token, role, userId });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error en el servidor', error: error.message });
    } else {
      res.status(500).json({ message: 'Error en el servidor', error });
    }
  }
};

// Controlador para actualizar datos del usuario (incluyendo rol, si es admin)

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params; 
  const { username, email, password, avatarUrl, role } = req.body;
  const userRole = (req as any).user; 

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    // Solo un administrador puede actualizar el rol
    if (role && userRole.role !== 'admin') {
      res.status(403).json({ message: 'No autorizado para cambiar el rol' });
      return;
    }

    // Si se proporciona una nueva contraseña, la encriptamos
    let updatedFields: any = { username, email, avatarUrl };
    if (password) {
      updatedFields.password = await encrypt(password);
    }

    // Actualizar solo el rol si el usuario autenticado es un administrador
    if (userRole.role === 'admin' && role) {
      updatedFields.role = role;
    }

    // Actualizar el usuario con los campos necesarios
    await user.update(updatedFields);

    res.json({ message: 'Usuario actualizado con éxito', user });
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({
      message: 'Error al actualizar usuario',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

// Controlador para eliminar un usuario (solo administradores)
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    // Eliminar el usuario
    await user.destroy();
    res.json({ message: 'Usuario eliminado con éxito' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'Error al eliminar el usuario',
        error: error.message,
      });
    }
  }
};

// Controlador para obtener todos los usuarios (solo accesible para administradores)

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userRole = (req as any).user.role;

  if (userRole !== 'admin') {
    res
      .status(403)
      .json({ message: 'No autorizado para ver todos los usuarios' });
    return;
  }

  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }, // Excluimos el password por seguridad
    });
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        message: 'Error al obtener los usuarios',
        error: error.message,
      });
    }
  }
};

// Controlador para obtener un usuario por ID (admin o el propio usuario)

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const userRole = (req as any).user.role;
  const userId = (req as any).user.id; // ID del usuario autenticado

  // Solo un admin o el propio usuario pueden ver los datos
  if (userRole !== 'admin' && userId !== parseInt(id)) {
    res.status(403).json({ message: 'No autorizado para ver este usuario' });
    return;
  }

  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: 'Error al obtener el usuario', error: error.message });
    }
  }
};

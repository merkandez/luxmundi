import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/userModel';
import { hashPassword, comparePassword } from '../utils/bcryptUtils';
import { generateToken } from '../utils/jwtUtils';

// Registro de usuario
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { username, email, password, imageUrl, role } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: '📧 El correo ya está registrado' });
      return;
    }

    // Verificar si se está intentando asignar el rol de "admin"
    if (role === 'admin') {
      const requestingUser = (req as any).user; // Usuario autenticado
      if (requestingUser.role !== 'admin') {
        res.status(403).json({ message: '❌ No tienes permisos para asignar el rol de admin' });
        return;
      }
    }

    // Encriptar la contraseña y crear el nuevo usuario
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      imageUrl,
      role: role || 'user', // Valor por defecto
    });

    res.status(201).json({ message: '✅ Usuario registrado exitosamente', user: newUser });
  } catch (error: any) {
    res.status(500).json({ message: '🚫 Error al registrar el usuario', error: error.message });
  }
};

// Login de usuario
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: '❌ Usuario no encontrado' });
      return;
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ message: '❌ Contraseña incorrecta' });
      return;
    }

    const token = generateToken(user.id);
    user.last_login = new Date(); // Actualizar último inicio de sesión
    await user.save(); // Guardar el usuario actualizado

    res.status(200).json({ message: '🔓 Inicio de sesión exitoso', token });
  } catch (error: any) {
    res.status(500).json({ message: '🔐 Error al iniciar sesión', error: error.message });
  }
};

// Actualizar datos del usuario
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params; // ID del usuario a actualizar
  const { username, email, password, imageUrl, role } = req.body;
  const userRole = (req as any).user; // Usuario que realiza la solicitud

  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'Usuario no encontrado' });
      return;
    }

    // Solo un admin puede actualizar el rol
    if (role && userRole.role !== 'admin') {
      res.status(403).json({ message: 'No autorizado para cambiar el rol' });
      return;
    }

    // Encriptar la nueva contraseña si se proporciona
    if (password) {
      const hashedPassword = await hashPassword(password);
      user.password = hashedPassword;
    }

    // Actualizar los datos
    await user.update({
      username,
      email,
      imageUrl,
      role: userRole.role === 'admin' ? role : user.role, // Cambia el rol solo si es admin
    });

    res.json({ message: 'Usuario actualizado con éxito', user });
  } catch (error: any) {
    res.status(500).json({ message: 'Error al actualizar usuario', error: error.message });
  }
};

// Eliminar un usuario (solo administradores)
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
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
  } catch (error: any) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};

// Crear un usuario admin inicial (ejecutar solo una vez al iniciar la aplicación)
export const createInitialAdmin = async (): Promise<void> => {
  const adminEmail = 'admin@example.com'; // Cambiar el correo según sea necesario
  const adminUsername = 'admin';
  const adminPassword = 'admin123'; // Cambiar la contraseña según sea necesario

  const existingAdmin = await User.findOne({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hashedPassword = await hashPassword(adminPassword);
    await User.create({
      username: adminUsername,
      email: adminEmail,
      password: hashedPassword,
      role: 'admin',
    });
    console.log('Usuario administrador creado con éxito');
  } else {
    console.log('El usuario administrador ya existe');
  }
};

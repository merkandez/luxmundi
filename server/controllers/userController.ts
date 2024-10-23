import { Request, Response } from 'express';
import User from '../models/userModel';
import { hashPassword, comparePassword } from '../utils/hashUtils';
import { generateToken } from '../utils/jwtUtils';

// Registro de usuario
export const registerUser = async (req: Request, res: Response): Promise<void> => { // Retorno 'void'
  const { username, email, password, profile_image_urlavatarUrl } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: '📧 El correo ya está registrado' });
      return;
    }

    // Encriptar la contraseña y crear el nuevo usuario
    const hashedPassword = await hashPassword(password);
    await User.create({ 
        username, 
        email, 
        password: hashedPassword,
        role: 'user', // Valor por defecto    
    });

    res.status(201).json({ message: '✅Usuario registrado exitosamente' });
  } catch (error : any) {
    res.status(500).json({ message: '🚫Error al registrar el usuario', error: error.message });
  }
};

// Login de usuario
export const loginUser = async (req: Request, res: Response): Promise<void> => { // Retorno 'void'
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: '❌Usuario no encontrado' });
      return;
    }

    // Verificar la contraseña
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ message: '❌Contraseña incorrecta' });
      return;
    }

    // Generar un token JWT
    const token = generateToken(user.id);

    // Actualizar la fecha del último inicio de sesión
    user.last_login = new Date(); // Asignar la fecha actual
    await user.save(); // Guardar el usuario con la nueva fecha

    res.status(200).json({ message: '🔓Inicio de sesión exitoso', token });
  } catch (error : any) {
    res.status(500).json({ message: '🔐Error al iniciar sesión', error: error.message });
  }
};

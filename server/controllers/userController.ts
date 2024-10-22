import { Request, Response } from 'express';
import User from '../models/userModel';
import { hashPassword, comparePassword } from '../utils/hashUtils';
import { generateToken } from '../utils/jwtUtils';

// Registro de usuario
export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: '📧 El correo ya está registrado' });
    }

    // Encriptar la contraseña y crear el nuevo usuario
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ 
        username, 
        email, 
        password: hashedPassword,
        role: 'user', // Valor por defecto    
    });

    return res.status(201).json({ message: '✅Usuario registrado exitosamente', user: newUser });
  } catch (error : any) { // Se declara el tipo de error como 'any'
    return res.status(500).json({ message: '🚫Error al registrar el usuario', error: error.message });
  }
};

// Login de usuario
export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: '❌Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: '❌Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = generateToken(user.id);

     // Actualizar la fecha del último inicio de sesión
     user.last_login = new Date(); // Asignar la fecha actual
     await user.save(); // Guardar el usuario con la nueva fecha

    return res.status(200).json({ message: '🔓Inicio de sesión exitoso', token });
  } catch (error : any) { // Se declara el tipo de error como 'any'
    return res.status(500).json({ message: '🔐Error al iniciar sesión', error: error.message });
  }
};
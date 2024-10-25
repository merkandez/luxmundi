import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import User from '../models/userModel';
import { hashPassword, comparePassword } from '../utils/bcryptUtils';
import { generateToken } from '../utils/jwtUtils';

// Registro de usuario
export const registerUser = async (req: Request, res: Response): Promise<void> => { // Retorno 'void' para indicar que la función no devuelve una respuesta explícita

// Procesar los errores de validación
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  const { username, email, password, imageUrl, role } = req.body;
  
    try {
    //Usuario ya existe?
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: '📧 El correo ya está registrado' });
      return;// Detenemos la ejecución, pero sin retornar un Response explícito
    }

    // Verificar si se está intentando asignar el rol de "admin"
    if (role === 'admin') {
      // Verificar si el usuario actual tiene permisos de administrador
      const requestingUser = (req as any).user; // Asumimos que el usuario autenticado ya está en req.user
      if (requestingUser.role !== 'admin') {
       res.status(403).json({ message: '❌ No tienes permisos para asignar el rol de admin' });
       return;
     }
   }
  
    // Encriptar la contraseña y crear el nuevo usuario
    const hashedPassword = await hashPassword(password);
    await User.create({ 
        username, 
        email, 
        password: hashedPassword,
        imageUrl,
        role: 'user', // Valor por defecto    
    });

    res.status(201).json({ message: '✅Usuario registrado exitosamente' });
  } catch (error : any) {
    res.status(500).json({ message: '🚫Error al registrar el usuario', error: error.message });
  }
};

// Login de usuario
export const loginUser = async (req: Request, res: Response): Promise<void> => { // Retorno 'void'
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return
  }   
  
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

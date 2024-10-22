import { Request, Response } from 'express';
import { encrypt, compare } from '../utils/handlePassword';
import { tokenSign } from '../utils/handleJwt';
import User from '../models/userModel';

// Registro de usuario con avatar opcional
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

// Inicio de sesión
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

import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';  // Asegúrate de tener JWT_SECRET en el archivo .env

// Función para generar un token JWT
export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
};

// Función para verificar un token JWT
export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
 
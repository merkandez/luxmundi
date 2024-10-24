import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[5]; // Los tokens JWT suelen venir como "Bearer token"

  if (!token) {
    return res.status(401).json({ message: '🚫Acceso denegado. Token no proporcionado.' });
  }

  try {
    const user = verifyToken(token);
    (req as any).user = user; // Añadimos la información del usuario al request
    next();
  } catch (error) {
    return res.status(403).json({ message: '✅Token inválido.' });
  }
};
 
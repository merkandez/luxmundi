// import { Request, Response, NextFunction } from 'express';
// import { tokenVerify } from '../utils/handleJwt';

// export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; // Los tokens JWT suelen venir como "Bearer token"

//   if (!token) {
//     return res.status(401).json({ message: '🚫Acceso denegado. Token no proporcionado.' });
//   }

//   try {
//     const user = tokenVerify (token);
//     (req as any).user = user; // Añadimos la información del usuario al request
//     next();
//   } catch (error) {
//     return res.status(403).json({ message: '✅Token inválido.' });
//   }
// };
 

import { Request, Response, NextFunction } from 'express';
import { tokenVerify } from '../utils/handleJwt';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: '🚫Acceso denegado. Token no proporcionado.' });
    return;
  }

  try {
    const user = await tokenVerify(token); // Si tokenVerify es asíncrono
    (req as any).user = user;
    next();
  } catch (error) {
    res.status(403).json({ message: '✅Token inválido.' });
  }
};

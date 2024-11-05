import { Request, Response, NextFunction } from 'express';
import { tokenVerify } from '../utils/handleJwt';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization'];
  
  if (!token) {
    res.status(403).json({ message: 'Token no proporcionado' });
    return;
  }

  const verified = tokenVerify(token.split(" ")[1]); // Asegurarse de quitar el prefijo "Bearer"
  
  console.log("Rol del usuario verificado:", verified?.role); // Verifica el rol en consola
  
  if (!verified || verified.role !== 'admin') {
    res.status(403).json({ message: 'No tienes permisos de administrador' });
    return;
  }

  (req as any).user = verified;
  next(); // Pasamos al siguiente middleware o controlador
};

import { Request, Response, NextFunction } from 'express';
import { tokenVerify } from '../utils/jwtUtils';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization'];
  
    console.log("Token recibido:", token); // Comprobar si el token está siendo recibido
  
    if (!token) {
      console.log("No se proporcionó token");
      res.status(403).json({ message: 'Token no proporcionado' });
      return;
    }
  
    try {
      const verified = tokenVerify(token.split(" ")[1]); // Dividir 'Bearer <token>'
      console.log("Token verificado:", verified); // Verificar que el token se haya decodificado correctamente
      if (!verified) {
        res.status(401).json({ message: 'Token inválido o expirado' });
        return;
      }
  
      (req as any).user = verified;
      next(); // Pasamos al siguiente middleware o controlador
    } catch (error) {
      console.log("Error verificando el token:", error);
      res.status(401).json({ message: 'Token inválido o expirado' });
    }
  };
  

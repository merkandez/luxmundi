import { Request, Response, NextFunction } from 'express';
import { tokenVerify } from '../utils/handleJwt';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization'];

    console.log("Token recibido:", token);

    if (!token) {
      console.log("No se proporcionó token");
      res.status(403).json({ message: 'Token no proporcionado' });
      return;
    }

    try {
      const verified = tokenVerify(token.split(" ")[1]);
      console.log("Token verificado con usuario y rol:", verified);
      if (!verified) {
        res.status(401).json({ message: 'Token inválido o expirado' });
        return;
      }

      // Asignamos el usuario verificado al request
      (req as any).user = verified;
      next();
    } catch (error) {
      console.log("Error verificando el token:", error);
      res.status(401).json({ message: 'Token inválido o expirado' });
    }
};

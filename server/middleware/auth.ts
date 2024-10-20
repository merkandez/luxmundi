import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    //Obtener el token del header
    const token = req.header('x-auth-token');

    //Si no hay token, retornar error
    if (!token) {
        return res.status(401).json({msg:'No hay token, permiso no válido'});
    }

    //Verificar token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECURE as string);
        (req as any).user = decoded; //Adjuntamos la información decodificada del token al request
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token no válido'});
        
    }

};
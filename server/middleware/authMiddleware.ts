import {Router} from 'express';
import { authMiddleware } from './auth';
//const middleware = async (req: any, res: any, next: any) => {} //middleware

const router = Router();

//Esta ruta solo es accesible si el usuario esta autenticado
router.get('/protected', authMiddleware, (req, res) =>{
    res.json({msg: 'Estás autorizado'})
}
)

export default router;
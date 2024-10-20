import {Router} from 'express';
import { check } from 'express-validator';
import { registerUser, loginUser } from '../controllers/authController';

const router = Router();

//Ruta para registra usuarios
router.post(
    '/register',
    [
        check('email', 'Por favor, incluye un email válido').isEmail(),
        check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    ],
    registerUser
);

//Ruta para loguear usuarios

router.post(
    '/login',
    [
        check('email', 'Por favor, incluye un email válido').isEmail(),
        check('password', 'La contraseña es requerida').exists(),
    ],
    loginUser
);

export default router;
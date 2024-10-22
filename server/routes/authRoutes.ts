import { registerUser, loginUser } from '../controllers/authController';
import { Router } from 'express';
import { check } from 'express-validator';

const authRouter = Router();

// Ruta para registrar usuarios
authRouter.post(
    '/register',
    [
      check('email', 'Por favor, incluye un email válido').isEmail(),
      check('password', 'La contraseña debe tener al menos 8 caracteres').isLength({ min: 6 }),
    ],
    registerUser
  );
// Ruta para loguear usuarios
authRouter.post('/login', loginUser);

export default authRouter;



import { registerUser, loginUser } from '../controllers/authController';
import { Router } from 'express';
import { body } from 'express-validator';


const authRouter = Router();

// Ruta para registrar usuarios
authRouter.post(
    '/register', 
    [
      body('email').isEmail().withMessage('Correo no válido'),
      body('password')
        .isLength({ min: 6 })
        .withMessage('Contraseña debe tener al menos 6 caracteres'),
      body('avatarUrl')
        .optional()
        .isURL()
        .withMessage('URL del avatar no válida'), // Validación opcional para el avatar
    ], 
    registerUser
  );
// Ruta para loguear usuarios
authRouter.post('/login', 
  [
    body('email').isEmail().withMessage('Correo no válido'),
    body('password').exists().withMessage('Debe ingresar la contraseña'),
  ],
  loginUser);

export default authRouter;



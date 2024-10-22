import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { body } from 'express-validator';

const router = Router();

// Rutas de registro y login con validación
router.post(
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

router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Correo no válido'),
    body('password').exists().withMessage('Debe ingresar la contraseña'),
  ],
  loginUser
);

export default router;

import { Router } from 'express';
import {
  registerUser,
  loginUser,
  updateUser,
} from '../controllers/authController';
import { body } from 'express-validator';
import { authMiddleware } from '../middlewares/authMiddleware';

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
      .withMessage('URL del avatar no válida'),
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

// Ruta para actualizar usuario (datos o rol)
router.put(
  '/:id',
  authMiddleware,
  [
    body('email').optional().isEmail().withMessage('Correo no válido'),
    body('username').optional().isString().withMessage('Nombre no válido'),
    body('password')
      .optional()
      .isLength({ min: 6 })
      .withMessage('Contraseña debe tener al menos 6 caracteres'),
    body('role')
      .optional()
      .isIn(['admin', 'user'])
      .withMessage('Rol no válido'),
  ],
  updateUser
);

export default router;

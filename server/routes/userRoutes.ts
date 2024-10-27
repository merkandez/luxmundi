import { Router } from 'express';
import { registerUser, loginUser, updateUser, deleteUser, } from '../controllers/userController'; 
import { body, check } from 'express-validator';
import { authMiddleware } from '../middlewares/authMiddleware';
//import { adminMiddleware } from '../middlewares/adminMiddleware';

const router = Router();

// Rutas de registro de usuario
router.post(
  '/register',
  [
    check('username').notEmpty().withMessage('🔤 Nombre de usuario obligatorio'),
    check('email').isEmail().withMessage('📧 Introduce un email válido'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('💭 La contraseña debe tener al menos 6 caracteres'),
    check('imageUrl')
      .optional()
      .isURL()
      .withMessage('📸 URL del avatar no válida'),
  ],
  registerUser
);

// Rutas de inicio de sesión de usuario
router.post(
  '/login',
  [
    check('email').isEmail().withMessage('📧 Introduce tu email registrado'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('🔤 Introduce tu contraseña'),
  ],
  loginUser
);

// Ruta para actualizar usuario (datos o rol)
router.put(
  '/:id',
  authMiddleware,
  [
    check('email').optional().isEmail().withMessage('Correo no válido'),
    check('username').optional().isString().withMessage('Nombre no válido'),
    check('password')
      .optional()
      .isLength({ min: 6 })
      .withMessage('Contraseña debe tener al menos 6 caracteres'),
    check('role')
      .optional()
      .isIn(['admin', 'user'])
      .withMessage('Rol no válido'),
  ],
  updateUser
);

// Ruta para eliminar un usuario (solo admin)
//router.delete('/:id', authMiddleware, adminMiddleware, deleteUser);

export default router;

import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { registerUser, loginUser } from '../controllers/userController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Rutas de usuarios
router.post('/register',
    [
        check('username').notEmpty().withMessage('🔤Nombre de usuario obligatorio'),
        check('email').isEmail().withMessage('📧Introduce un email válido'),
        check('password')
          .isLength({ min: 6 }).withMessage('💭La contraseña debe tener al menos 6 caracteres'),
     
    ],
    registerUser
);

router.post('/login', 
    [
        check('email').isEmail().withMessage('📧 Introsuce tu email registrado'),
        check('password')
            .isLength({ min: 6 }).withMessage('🔤 Introduce tu contraseña'),
    ],
    loginUser        
);

export default router;
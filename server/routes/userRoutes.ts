import { Router, Request, Response } from 'express';
import { registerUser, loginUser } from '../controllers/userController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// Rutas de usuarios
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
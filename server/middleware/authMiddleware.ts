import { Router } from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

// Esta ruta solo es accesible si el usuario está autenticado
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'Estás autorizado' });
});



export default router;

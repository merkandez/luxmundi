import { Router } from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/postController';
import { authMiddleware } from '../middlewares/authMiddleware'; // Importamos el middleware autenticación
import { adminMiddleware } from '../middlewares/adminMiddleware'; // Importamos el middleware de admin

const router = Router();

// Solo usuarios autenticados pueden ver los posts
router.get('/',  getAllPosts);
router.get('/:id', authMiddleware, getPostById);

// Solo administradores pueden crear, actualizar o eliminar posts
router.post('/', authMiddleware, adminMiddleware, createPost);
router.put('/:id', authMiddleware, adminMiddleware, updatePost);
router.delete('/:id', authMiddleware, adminMiddleware, deletePost);

export default router;

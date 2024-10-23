import { Router } from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postController';
import { authMiddleware } from '../middlewares/authMiddleware'; // Importamos el middleware

const router = Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', authMiddleware, createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;

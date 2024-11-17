import { Request, Response } from 'express';
import PostModel from '../models/postModel';


// Controlador para obtener todos los posts (disponible solo para usuarios autenticados)
export const getAllPosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const summary: boolean = req.query.summary === 'true'; // Determina si es un resumen

  try {
    const posts = await PostModel.findAll({
      attributes: summary
        ? ['id', 'title', 'content', 'imageUrl', 'likes'] // Campos básicos más likes
        : undefined, // Si no es resumen, devuelve todos los atributos
    });

    res.json(posts); 
  } catch (error) {
    res.status(500).json({
      message: 'Error al obtener los posts',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};


// Controlador para obtener un post por ID (disponible solo para usuarios autenticados)
export const getPostById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const post = await PostModel.findByPk(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Error al obtener post', error: error.message });
  }
};

// Controlador para crear un nuevo post (solo para administradores)
export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, content, imageUrl } = req.body;
  const userId = (req as any).user.id; // Extraer el userId del token

  try {
    const post = await PostModel.create({ userId, title, content, imageUrl });
    res.status(201).json(post);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Error al crear post', error: error.message });
  }
};

// Controlador para actualizar un post (solo para administradores)
export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { title, content, imageUrl } = req.body;
  try {
    const post = await PostModel.findByPk(id);
    if (post) {
      await post.update({ title, content, imageUrl });
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Error al actualizar post', error: error.message });
  }
};

// Controlador para eliminar un post (solo para administradores)
export const deletePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const post = await PostModel.findByPk(id);
    if (post) {
      await post.destroy();
      res.json({ message: 'Post eliminado' });
    } else {
      res.status(404).json({ message: 'Post no encontrado' });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: 'Error al eliminar post', error: error.message });
  }
};
// Controlador para obtener posts aleatorios

export const getRandomPosts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const limit = parseInt(req.query.limit as string) || 5;

  try {
    const randomPosts = await PostModel.findAll({
      attributes: ['imageUrl'],
      order: [PostModel.sequelize!.fn('RAND')], // Accede a sequelize desde el modelo
      limit,
    });

    res.json(randomPosts);
  } catch (error: any) {
    res.status(500).json({
      message: 'Error al obtener posts aleatorios',
      error: error.message,
    });
  }
};
// Controlador para actualizar likes
export const toggleLike = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  

  try {
    const post = await PostModel.findByPk(id);
    if (!post) {
      res.status(404).json({ message: 'Post no encontrado' });
      return;
    }

    // Incrementar o decrementar likes
    const increment = req.body.increment; // true para añadir, false para restar
    post.likes += increment ? 1 : -1;

    await post.save();

    res.status(200).json({ message: 'Likes actualizados', likes: post.likes });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al actualizar likes', error: error.message });
    } else {
      res.status(500).json({ message: 'Error desconocido' });
    }
  }
};


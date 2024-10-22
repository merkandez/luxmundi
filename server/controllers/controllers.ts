import { Request, Response } from "express";
import PostModel from "../models/postModel";

// Controlador para obtener todos los posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.findAll();
    res.json(posts); // Envía los posts como respuesta JSON
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener posts",
      error: error.message,
    });
  }
};
// Controlador para obtener una entrada por ID

export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findByPk(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post no encontrado" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error al obtener posts", error: error.message });
  }
};

// Crear un nuevo post
export const createPost = async (req: Request, res: Response) => {
  const { userId, title, content, imageUrl } = req.body;
  try {
    const post = await PostModel.create({ userId, title, content, imageUrl });
    res.status(201).json(post);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error al crear post", error: error.message });
  }
};

// Actualizar una entrada existente
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, imageUrl } = req.body;
  try {
    const post = await PostModel.findByPk(id);
    if (post) {
      await post.update({ title, content, imageUrl });
      res.json(post);
    } else {
      res.status(404).json({ message: "Post no encontrado" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error al actualizar el post", error: error.message });
  }
};

// Eliminar un post
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findByPk(id);
    if (post) {
      await post.destroy();
      res.json({ message: "Post eliminado" });
    } else {
      res.status(404).json({ message: "Post no encontrado" });
    }
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error al eliminar el post", error: error.message });
  }
};

import { Request, Response } from 'express';
import postModel from '../models/postModel.ts';


// Controlador para obtener todos los posts
export const getAllPosts = async (req: Request, res: Response) => {
    try {
      const posts = await postModel.findAll();
      res.json(posts); // Envía los posts como respuesta JSON
    } catch (error) {
      res.status(500).json({
        message: 'Error al obtener los libros',
        error: error.message,
      });
    }
  };
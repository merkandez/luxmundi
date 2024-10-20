var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PostModel from '../models/postModel.js';
// Controlador para obtener todos los posts
export const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield PostModel.findAll();
        res.json(posts); // Envía los posts como respuesta JSON
    }
    catch (error) {
        res.status(500).json({
            message: 'Error al obtener posts',
            error: error.message,
        });
    }
});
// Controlador para obtener una entrada por ID
export const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield PostModel.findByPk(id);
        if (post) {
            res.json(post);
        }
        else {
            res.status(404).json({ message: 'Post no encontrado' });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Error al obtener posts', error: error.message });
    }
});
// Crear un nuevo post
export const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, title, content, imageUrl } = req.body;
    try {
        const post = yield PostModel.create({ userId, title, content, imageUrl });
        res.status(201).json(post);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Error al crear post', error: error.message });
    }
});
// Actualizar una entrada existente
export const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, content, imageUrl } = req.body;
    try {
        const post = yield PostModel.findByPk(id);
        if (post) {
            yield post.update({ title, content, imageUrl });
            res.json(post);
        }
        else {
            res.status(404).json({ message: 'Post no encontrado' });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Error al actualizar el post', error: error.message });
    }
});
// Eliminar un post
export const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const post = yield PostModel.findByPk(id);
        if (post) {
            yield post.destroy();
            res.json({ message: 'Post eliminado' });
        }
        else {
            res.status(404).json({ message: 'Post no encontrado' });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ message: 'Error al eliminar el post', error: error.message });
    }
});

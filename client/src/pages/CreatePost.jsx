import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { createPost } from '../services/postService';

const CreatePost = () => {
    const navigate = useNavigate();

    const handleSubmit = async (formData) => {
        try {
            await createPost(formData);
            navigate('/posts'); // Redirige a la lista de posts después de crear
        } catch (error) {
            console.log('Error al crear el post', error);
        }
    };
    //     const PORT = import.meta.env.VITE_PORT || 8080;
    //     await fetch(`http://localhost:${PORT}/api/posts`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     navigate('/posts'); // Redirige a la lista de posts después de crear
    // };

    return <PostForm onSubmit={handleSubmit} />; // Llama a PostForm sin datos iniciales
};

export default CreatePost;
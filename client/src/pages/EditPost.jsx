import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useAuth } from '../context/AuthContext';

const EditPost = ({ postId, initialData }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || (initialData.creatorId !== user.id && user.role !== 'admin')) {
            alert('No tienes permiso para editar este post.');
            navigate('/');
        }
    }, [initialData, user, navigate]);

    const handleSubmit = async (data) => {
        const PORT = process.env.PORT || 8000;
        // Lógica para enviar la actualización al backend
        // Asegúrate de enviar el postId también
        await fetch(`http://localhost:${PORT}/api/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Añade token de autenticación si es necesario
            },
            body: JSON.stringify(data),
        });
        navigate('/posts'); // Redirige a la lista de posts después de guardar
    };

    return <PostForm initialData={initialData} onSubmit={handleSubmit} />;
};

export default EditPost;

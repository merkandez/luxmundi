import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types'; // Importa PropTypes

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
        const PORT = import.meta.env.VITE_PORT || 8000; // Cambia process.env a import.meta.env
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

// Validación de PropTypes
EditPost.propTypes = {
    postId: PropTypes.string.isRequired, // Ajusta el tipo según sea necesario
    initialData: PropTypes.shape({
        creatorId: PropTypes.string.isRequired, // Ajusta el tipo según sea necesario
        title: PropTypes.string,
        content: PropTypes.string,
    }).isRequired,
};

export default EditPost;
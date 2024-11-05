import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '..pages/PostForm';
import useAuth from '../hooks/useAuth';


const EditPost = () => {
    const{ postId } = useParams();
    const { role } = useAuth();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);


    useEffect(() => {
         // Verifica si el usuario tiene permiso para editar
         if (role !== 'admin') {
            alert('No tienes permiso para editar este post.');
            navigate('/'); // Redirige si no tiene permiso
        };
        // Cargar datos del post por ID
        const fetchPostData = async () => {
            try {
                const PORT = import.meta.env.VITE_PORT || 8080;
                const response = await fetch(`http://localhost:${PORT}/api/posts/${postId}`);
                if (!response.ok) throw new Error("Error al cargar el post");
                const data = await response.json();
                setInitialData(data);
            } catch (error) {
                console.error('Error al cargar el post:', error);
            }
        };

        fetchPostData();
    }, [postId, role, navigate]);  


    const handleSubmit = async (data) => {
        try{
            const PORT = import.meta.env.VITE_PORT || 8080; // Cambia process.env a import.meta.env
        // Lógica para enviar la actualización al backend
        await fetch(`http://localhost:${PORT}/api/posts/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(data),
        });
        navigate('/posts'); // Redirige a la lista de posts después de guardar
    } catch (error) {
        console.error("Error al actualizar el post:", error);
    }
};

if (!initialData) return <p>Cargando...</p>; // Muestra un loading mientras carga el post

return <PostForm initialData={initialData} onSubmit={handleSubmit} />;
};

export default EditPost;
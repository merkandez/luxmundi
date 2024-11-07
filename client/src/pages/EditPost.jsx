import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../pages/PostForm';
import useAuth from '../hooks/useAuth';
import { fetchPostById, updatePost } from '../services/postService';

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
            return
        };
        // Cargar datos del post por ID
        const loadPostData = async () => {
            try {
                const data = await fetchPostById(postId);
                setInitialData(data);
            } catch (error) {
                console.error('Error al cargar el post:', error);
            }
        };

        loadPostData();
    }, [postId, role, navigate]);  


    const handleSubmit = async (data) => {
        try{
            await updatePost(data, postId);
            navigate('/posts'); // Redirige a la lista de posts después de acctualizar
        } catch (error) {
            console.error('Error al actualizar el post:', error);
            }
        };
        
       if (!initialData) return <p>Cargando...</p>; 

        return <PostForm initialData={initialData} onSubmit={handleSubmit} />;
};

export default EditPost;
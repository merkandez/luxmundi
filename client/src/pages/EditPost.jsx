/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { useAuth } from '../context/AuthContext';

const EditPost = ({ postId, initialData }) => {
  const { user } = useAuth();  // Suponiendo que tienes un contexto de usuario
  const navigate = useNavigate();

  useEffect(() => {
    if (initialData.creatorId !== user.id && user.role !== 'admin') {
      alert('No tienes permiso para editar este post.');
      navigate('/');
    }
  }, [initialData, user, navigate]);

  const handleSubmit = async (data) => {
    // Lógica para enviar la actualización al backend
    // ...

    navigate('/posts'); // Redirige a la lista de posts después de guardar
  };

  return <PostForm initialData={initialData} onSubmit={handleSubmit} />;
};

export default EditPost;

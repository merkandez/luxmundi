import axios from 'axios';

// Ruta base de la API para posts
const API_URL = `${import.meta.env.VITE_API_URL}/posts`;

//Funcion para cargar los posts
export const fetchPosts = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const fetchPostById = async (postId) => {
  const response = await axios.get(`${API_URL}/${postId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

//Funcion para crear un nuevo post
export const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    'Content-Type': 'multipart/form-data'
  },
  );

  return response.data;
};

//Funcion para actualizar un post
export const updatePost = async (postId, postData) => {
  const response = await axios.put(`${API_URL}/${postId}`, postData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

//Funcion para eliminar un post
export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_URL}/${postId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

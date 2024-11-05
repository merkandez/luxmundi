import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/posts`;

export const fetchPosts = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const updatePost = async (postId, postData) => {
  const response = await axios.put(`${API_URL}/${postId}`, postData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const deletePost = async (postId) => {
  const response = await axios.delete(`${API_URL}/${postId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

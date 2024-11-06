import axios from 'axios';

// Ruta base de la API para admin
const API_URL = `${import.meta.env.VITE_API_URL}/admin`;

// Función para cargar los usuarios
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al cargar los usuarios:', error);
    throw error;
  }
};
// Obtener usuario por ID
export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  }
};

// Función para actualizar los datos del usuario (incluyendo rol si es admin)
export const updateUser = async (userId, updateData) => {
  try {
    const response = await axios.put(
      `${API_URL}/users/${userId}`,
      updateData,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

// Función para eliminar un usuario
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
};

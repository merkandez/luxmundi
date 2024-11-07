import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/auth`;

// Función para registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error en el registro de usuario:', error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    console.log('Respuesta del servidor:', response.data); // Verifica la respuesta aquí
    const { token, role } = response.data; // Suponemos que 'role' también está en la respuesta

    // Verifica que 'token' y 'role' no estén undefined
    if (!token || !role) {
      throw new Error('Token o rol no proporcionados en la respuesta');
    }

    // Guardar el token y el rol en el almacenamiento local
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);

    return response.data; // Devuelve ambos valores si se necesitan en otros lugares
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    throw error;
  }
};

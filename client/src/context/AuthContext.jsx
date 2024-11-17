import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/authService';
import { registerUser } from '../services/authService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null); // Añadido avatarUrl al contexto
  const [isInitialized, setIsInitialized] = useState(false);

  // Al inicializar el contexto, cargamos los datos almacenados en el localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');
    const storedAvatarUrl = localStorage.getItem('avatarUrl'); // Cargar avatarUrl

    if (token && storedUserId) {
      setAuthState(token, storedRole, storedUserId, storedUsername, storedAvatarUrl);
    }
    console.log('Contexto inicializado con userId:', storedUserId);
    setIsInitialized(true);
  }, []);

  // Función para actualizar el estado de autenticación
  const setAuthState = (token, role, userId, username, avatarUrl) => {
    console.log('Actualizando estado de autenticación:', { token, role, userId, username, avatarUrl });
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);
      localStorage.setItem('avatarUrl', avatarUrl);

      setIsAuthenticated(true);
      setRole(role);
      setUserId(userId);
      setUsername(username);
      setAvatarUrl(avatarUrl);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userId');
      localStorage.removeItem('username');
      localStorage.removeItem('avatarUrl');

      setIsAuthenticated(false);
      setRole(null);
      setUserId(null);
      setUsername(null);
      setAvatarUrl(null);
    }
  };

  // Función para manejar el inicio de sesión
  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      const { token, role, userId, username, avatarUrl } = data;

      setAuthState(token, role, userId, username, avatarUrl);
      console.log('Usuario autenticado con userId:', userId);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    }
  };

  // Función para manejar el registro y autenticación automática
  const registerAndLogin = async (data) => {
    try {
      const response = await registerUser(data);
      const { token, role, userId, username, avatarUrl } = response;

      setAuthState(token, role, userId, username, avatarUrl);
      console.log('Usuario registrado y autenticado:', userId);
    } catch (error) {
      console.error('Error durante el registro e inicio de sesión:', error);
      throw error;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setAuthState(null, null, null, null, null);
    console.log('Sesión cerrada');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        role,
        userId,
        username,
        avatarUrl, // Proveer avatarUrl al contexto
        isInitialized,
        login,
        logout,
        registerAndLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/authService';
import { registerUser } from '../services/authService';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Al inicializar el contexto, cargamos los datos almacenados en el localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    const storedUserId = localStorage.getItem('userId');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUserId) {
      setAuthState(token, storedRole, storedUserId, storedUsername);
    }
    console.log('Contexto inicializado con userId:', storedUserId);
    setIsInitialized(true);
  }, []);

  // Función para actualizar el estado de autenticación
  const setAuthState = (token, role, userId, username) => {
    console.log("Actualizando estado de autenticación:", { token, role, userId, username });
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);
      localStorage.setItem('username', username);

      setIsAuthenticated(true);
      setRole(role);
      setUserId(userId);
      setUsername(username);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userId');
      localStorage.removeItem('username');

      setIsAuthenticated(false);
      setRole(null);
      setUserId(null);
      setUsername(null);
    }
  };

  // Función para manejar el inicio de sesión
  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      const { token, role, userId, username } = data;

      setAuthState(token, role, userId, username);
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
      const { token, role, userId, username } = response;

      setAuthState(token, role, userId, username); 
      console.log('Usuario registrado y autenticado:', userId);
    } catch (error) {
      console.error('Error durante el registro e inicio de sesión:', error);
      throw error;
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setAuthState(null, null, null, null);
    console.log('Sesión cerrada');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        role,
        userId,
        username,
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

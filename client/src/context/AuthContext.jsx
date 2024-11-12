import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null); // Agregar userId
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Cargar token, rol y userId desde localStorage al inicializar el contexto
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId'); // Obtener userId

    if (token) {
      setIsAuthenticated(true);
      setRole(storedRole || 'user');
      setUserId(storedUserId); // Establecer userId en el contexto
    }
    setIsInitialized(true);
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      const { token, role, userId } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId); // Almacenar userId en localStorage
      setIsAuthenticated(true);
      setRole(role);
      setUserId(userId); // Establecer userId en el contexto
      setIsInitialized(true);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId'); // Eliminar userId de localStorage
    setIsAuthenticated(false);
    setRole(null);
    setUserId(null); // Resetear userId en el contexto
    setIsInitialized(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, userId, login, logout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

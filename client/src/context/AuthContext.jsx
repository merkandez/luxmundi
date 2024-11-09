import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false); // Agrega isInitialized

  useEffect(() => {
    // Cargar token y rol desde localStorage al inicializar el contexto
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
      setRole(storedRole || 'user');
    }
    setIsInitialized(true); // Configurar isInitialized como true después de cargar el token y rol
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      const { token, role } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setIsAuthenticated(true);
      setRole(role);
      setIsInitialized(true); // Aseguramos que isInitialized esté en true después de iniciar sesión
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setRole(null);
    setIsInitialized(true); // Resetear isInitialized en caso de logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

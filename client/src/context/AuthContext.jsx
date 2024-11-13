import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    const storedUserId = localStorage.getItem('userId'); 

    if (token && storedUserId) {
      setIsAuthenticated(true);
      setRole(storedRole || 'user');
      setUserId(storedUserId);
    }
    console.log("Contexto inicializado con userId:", storedUserId);
    setIsInitialized(true);
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      const { token, role, userId } = data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('userId', userId);

      setIsAuthenticated(true);
      setRole(role);
      setUserId(userId);
      console.log("Usuario autenticado con userId:", userId);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setRole(null);
    setUserId(null);
    setIsInitialized(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, userId, login, logout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

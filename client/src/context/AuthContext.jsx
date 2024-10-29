
// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const [userRole, setUserRole] = useState(null); // Estado del rol del usuario
  const [token, setToken] = useState(null); // Almacenar el token
  const navigate = useNavigate(); // Navegación programática

  // Cargar token y rol desde el almacenamiento local
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedRole = localStorage.getItem('userRole');
    
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      setUserRole(savedRole);
    }
  }, []);

  // Función de login
  const login = (token, role) => {
    localStorage.setItem('token', token); // Guardar el token en localStorage
    localStorage.setItem('userRole', role); // Guardar el rol en localStorage
    setToken(token); // Guardar token en el estado
    setUserRole(role); // Guardar rol en el estado
    setIsAuthenticated(true); // Cambiar el estado de autenticación
    navigate('/'); // Redirigir a la página principal
  };

  // Función de logout
  const logout = () => {
    localStorage.removeItem('token'); // Eliminar token de localStorage
    localStorage.removeItem('userRole'); // Eliminar rol de localStorage
    setToken(null); // Eliminar token del estado
    setUserRole(null); // Eliminar rol del estado
    setIsAuthenticated(false); // Cambiar el estado de autenticación
    navigate('/login'); // Redirigir a la página de login
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

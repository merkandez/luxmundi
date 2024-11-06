import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null); // Estado para el rol del usuario

  useEffect(() => {
    // Simulamos la carga del token y rol desde almacenamiento local
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('token');

    if (token) {
      setIsAuthenticated(true);
      setRole(storedRole || 'user'); // Definir rol por defecto
    }
  }, []);

  const login = (userRole) => {
    localStorage.setItem('token', 'fake-token'); // Token simulado
    localStorage.setItem('role', userRole); // Guardamos el rol
    setIsAuthenticated(true);
    setRole(userRole); // Establece el rol del usuario al iniciar sesión
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setRole(null); // Reinicia el rol a un valor predeterminado
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

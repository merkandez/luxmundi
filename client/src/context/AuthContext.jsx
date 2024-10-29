import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('user'); // Estado para el rol del usuario

  const login = (userRole) => {
    setIsAuthenticated(true);
    setRole(userRole); // Establece el rol del usuario al iniciar sesión
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole('user'); // Reinicia el rol a un valor predeterminado
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

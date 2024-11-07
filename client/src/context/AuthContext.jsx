import React, { createContext, useState, useEffect } from 'react';
import { loginUser } from '../services/authService'; // Importamos el servicio de autenticación

// Crear el contexto de autenticación
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null); // Estado para el rol del usuario

  useEffect(() => {
    // Cargar el token y rol desde almacenamiento local al iniciar
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('token');
    console.log("AuthProvider - Token:", token, "Role:", storedRole); // Verifica los valores aquí

    if (token) {
      setIsAuthenticated(true);
      setRole(storedRole || 'user'); // Definir rol por defecto
    }
  }, []);

  // Función de inicio de sesión
  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials); // Llama a la API real para autenticar
      const { token, role } = data; // Supón que la respuesta incluye token y role
      console.log('Token:', token); // Agrega esta línea para verificar
      console.log('Role:', role); // Agrega esta línea para verificar

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      setIsAuthenticated(true);
      setRole(role); // Establece el rol del usuario al iniciar sesión
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      throw error;
    }
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

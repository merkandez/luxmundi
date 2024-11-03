import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const AuthContext = createContext(); // Define el contexto

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Establece el estado según la existencia del token
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true); // Actualiza el estado al iniciar sesión
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Actualiza el estado al cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validación de PropTypes para el AuthProvider
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' debe ser un nodo React y es obligatorio
};

export default AuthProvider; // Exporta el AuthProvider como exportación por defecto

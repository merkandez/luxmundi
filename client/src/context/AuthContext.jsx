import { createContext, useState, useEffect } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const AuthContext = createContext(); // Asegúrate de definir el contexto aquí

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Validación de PropTypes
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // 'children' debe ser un nodo React y es obligatorio
};

export default AuthProvider; // Asegúrate de que este sea el único export por defecto

// src/router/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ requiredRole }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  // Si el usuario no está autenticado, redirige a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si la ruta requiere un rol específico y el usuario no lo tiene, redirige a una página de "Acceso Denegado"
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/no-access" />;
  }

  // Si todo está correcto, renderiza el componente de la ruta protegida
  return <Outlet />;
};

export default ProtectedRoute;

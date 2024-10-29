// src/components/LogoutButton.jsx
import React from 'react';
import useAuth from '../hooks/useAuth';

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Cerrar Sesión</button>;
};

export default LogoutButton;

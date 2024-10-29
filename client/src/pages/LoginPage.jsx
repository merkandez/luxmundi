// src/pages/LoginPage.jsx
import React from 'react';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <button onClick={login}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginPage;

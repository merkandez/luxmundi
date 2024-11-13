import React from 'react';
import { Link } from 'react-router-dom';

const NoAccessPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Acceso denegado</h1>
      <p>No tienes los permisos necesarios para acceder a esta página.</p>
      <Link to='/'>Volver al inicio</Link>
    </div>
  );
};

export default NoAccessPage;

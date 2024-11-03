import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter.jsx'; // Configuración de rutas
import { AuthProvider } from './context/AuthContext.jsx'; // Contexto de autenticación
import GlobalStyles from './styles/GlobalStyles.jsx'; // Estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);


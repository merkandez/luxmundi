import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/AppRouter'; // Importamos el enrutador
import { AuthProvider } from './context/AuthContext'; // Para autenticación global
import GlobalStyles from './styles/GlobalStyles'; // Estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AuthProvider>
        <GlobalStyles />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>
);

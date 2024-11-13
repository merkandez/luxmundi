import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // El Layout gestionará el modal de autenticación
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },

      {
        path: '*',
        element: <NotFound />,
      },

      // Rutas protegidas
      {
        path: 'admin',
        element: (
          <ProtectedRoute requiredRole='admin'>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      { path: '*', element: <NotFoundPage /> }, // Ruta para la página 404
    ],
  },
]);

export default router;

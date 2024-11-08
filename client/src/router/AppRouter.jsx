import ArticlePage from '../pages/ArticlePage.jsx'
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import NoAccessPage from '../pages/NoAccessPage';
import AboutPage from '../pages/AboutPage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // El Layout gestionará el modal de autenticación
    children: [
      { index: true, element: <HomePage /> },
      { path: 'aboutus', element: <AboutPage /> },
      { path: 'articlePage/:id', element: <ArticlePage/> },

      // Rutas protegidas
      {
        path: 'admin',
        element: (
          <ProtectedRoute requiredRole="admin">
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      { path: 'no-access', element: <NoAccessPage /> },

    ],
  },
]);

export default router;


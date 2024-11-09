import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import CreatePost from '../pages/CreatePost'; 
import EditPost from '../pages/EditPost';
import AdminPage from '../pages/AdminPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // El Layout gestionará el modal de autenticación
    children: [
      { index: true, element: <HomePage /> },
      { path: 'aboutus', element: <AboutPage /> },
      { path: 'createpost', element: <CreatePost /> }, // Ruta para crear un post
      { path: 'editpost/:postId', element: <EditPost /> }, // Ruta para editar un post
      
      // Rutas protegidas
      {
        path: 'admin',
        element: (
          <ProtectedRoute requiredRole="admin">
            <AdminPage />
          </ProtectedRoute>
        ),
      },
      { path: '*', element: <NotFoundPage /> }, // Ruta para la página 404
    ],
  },
]);

export default router;

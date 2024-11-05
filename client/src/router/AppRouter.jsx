import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import CreatePost from '../pages/PostForm'; // Asegúrate de tener este componente
import EditPost from '../pages/EditPost';
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
      { path: 'no-access', element: <NoAccessPage /> },
    ],
  },
]);

export default router;

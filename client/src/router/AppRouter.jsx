import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';
import UnderConstruction from '../pages/UnderConstruction';
import ScrollToTop from '../components/ScrollToTop'; // Importa ScrollToTop

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop /> {/* Añade ScrollToTop aquí */}
        <Layout />
      </>
    ), 
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: "under-construction", element: <UnderConstruction />,},
      { path: '*', element: <NotFoundPage />,},

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

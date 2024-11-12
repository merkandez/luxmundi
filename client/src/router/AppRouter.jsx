import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import NoAccessPage from '../pages/NoAccessPage';
import AboutPage from '../pages/AboutPage';
import ProtectedRoute from './ProtectedRoute';
import NotFound from "../pages/NotFound";
import ContactForm from "../components/ContactForm";
import ArticlePage from "../pages/ArticlePage";  //MODIFICA LA "A" por minuscula


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // El Layout gestionará el modal de autenticación
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: "contact", element: <ContactForm />},
      { path: 'articlePage/:id', element: <ArticlePage/> },
      
    
      {
        path: "*",
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
      { path: 'no-access', element: <NoAccessPage /> },
    ],
  },
]);

export default router;

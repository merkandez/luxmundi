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
import { AuthProvider } from "../context/AuthContext";
import UnderConstruction from "../pages/UnderConstruction";
import ArticlePage from "../pages/ArticlePage";
import ScrollToTop from '../components/ScrollToTop'; 


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
      { path: "contact", element: <ContactForm />},
      { path: 'post/:postId', element: <ArticlePage/> },
      { path: "under-construction", element: <UnderConstruction />},
      { path: "*", element: <NotFound />},

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

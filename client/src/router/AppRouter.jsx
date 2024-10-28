// src/router/AppRouter.js
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

/* import NotFound from '../pages/NotFound'; */

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    /* errorElement: <NotFound />, */ // Página para rutas no encontradas
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    
    ],
  },
]);

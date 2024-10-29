import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AdminPage from '../pages/AdminPage.jsx'; // Ruta solo para admin
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../pages/NotFound';
import NoAccess from '../pages/NoAccess';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      {
        path: 'admin',
        element: <ProtectedRoute requiredRole='admin' />, // Ruta protegida para admin
        children: [{ index: true, element: <AdminPage /> }],
      },
      { path: 'no-access', element: <NoAccess /> }, // Página para acceso denegado
    ],
  },
]);

// src/router/AppRouter.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import NotFound from '../pages/NotFound.jsx';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ProtectedRoute component={<HomePage />} /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'aboutus', element: <ProtectedRoute component={<AboutUs />} /> },
    ],
  },
]);

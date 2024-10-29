
// src/router/AppRouter.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout.jsx';
import HomePage from '../pages/HomePage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import NotFound from '../pages/NotFound.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout común para todas las rutas
    errorElement: <NotFound />, // Página de error para rutas no encontradas
    children: [
      { index: true, element: <HomePage /> }, // Ruta raíz
      { path: 'login', element: <LoginPage /> }, // Ruta de login
      { path: 'register', element: <RegisterPage /> }, // Ruta de registro
      { path: 'aboutus', element: <AboutUs /> }, // Ruta de "About Us"
    ],
  },
]);


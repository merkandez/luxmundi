// src/router/AppRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import NotFound from "../pages/NotFound.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common layout for all routes
    errorElement: <NotFound />, // Error page for undefined routes
    children: [
      { index: true, element: <HomePage /> }, // Root route
      { path: "login", element: <LoginPage /> }, // Login route
      { path: "register", element: <RegisterPage /> }, // Register route
      { path: "about", element: <AboutUs /> }, // About Us route
    ],
  },
]);

export default router;

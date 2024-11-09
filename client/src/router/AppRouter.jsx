// src/router/AppRouter.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import NotFound from "../pages/NotFound.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ContactForm from "../components/ContactForm.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Common layout for all routes
    errorElement: <NotFound />, // Error page for undefined routes
    children: [
      { index: true, element: <HomePage /> }, // Root route
      { path: "register", element: <RegisterPage /> }, // Register route
      { path: "about", element: <AboutUs /> }, // About Us route
      { path: "login", element: <LoginPage /> }, // Add login route
      { path: "contact", element: <ContactForm /> }, // Add contact route
    ],
  },
]);

export default router;

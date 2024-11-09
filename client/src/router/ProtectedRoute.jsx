import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ requiredRole, children }) => {
  const { isAuthenticated, role } = useAuth();

  console.log("Authenticated:", isAuthenticated); // Verifica si el usuario está autenticado
  console.log("User role:", role); // Verifica el rol del usuario

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirige a Home, donde se abrirá el modal
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/no-access" replace />;
  }

  // Renderiza el contenido protegido (AdminPage u otro) si se cumplen las condiciones
  return children;
};

export default ProtectedRoute;

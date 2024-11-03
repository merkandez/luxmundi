import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ requiredRole }) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />; // Redirige a Home, donde se abrirá el modal
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/no-access" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

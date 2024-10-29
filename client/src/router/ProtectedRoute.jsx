import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ roleRequired }) => {
  const { isAuthenticated, role } = useAuth();

  // Verificar si el usuario está autenticado y tiene el rol necesario
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  if (roleRequired && role !== roleRequired) {
    return <Navigate to='/no-access' />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

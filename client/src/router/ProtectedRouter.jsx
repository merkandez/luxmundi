import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? component : <Navigate to='/login' />;
};

export default ProtectedRoute;

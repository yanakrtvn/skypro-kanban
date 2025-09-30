import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
    const { isAuth } = useAuth();
    
    return isAuth ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
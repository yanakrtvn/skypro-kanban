import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuth, children }) {
    return isAuth ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import MainPageWithPopups from '../pages/MainPage/MainPageWithPopups';
import CardPageWithPopup from '../pages/CardPage/CardPageWithPopup';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function AppRoutes() {
  useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <MainPageWithPopups />
        </ProtectedRoute>
      } />
      
      <Route path="/card/:id" element={
        <ProtectedRoute>
          <CardPageWithPopup />
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
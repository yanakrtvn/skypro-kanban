import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Layout from './Layout/Layout';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ExitPage from '../pages/ExitPage/ExitPage';
import MainPage from '../pages/MainPage/MainPage';
import CardPage from '../pages/CardPage/CardPage';
import NewCardPage from '../pages/NewCardPage/NewCardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function AppRoutes() {
  useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      <Route path="/" element={
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      }>
        <Route index element={<MainPage />} />
        <Route path="card/new" element={<NewCardPage />} />
        <Route path="card/:id" element={<CardPage />} />
        <Route path="exit" element={<ExitPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
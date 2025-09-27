import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from './ProtectedRoute';
import MainPage from '../pages/MainPage/MainPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CardPage from '../pages/CardPage/CardPage';
import ExitPage from '../pages/ExitPage/ExitPage';
import NewCardPage from '../pages/NewCardPage/NewCardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

function AppRoutes({ isAuth, setIsAuth, userData, setUserData }) {
    return (
        <Routes>
            <Route path="/login" element={
                <LoginPage setIsAuth={setIsAuth} setUserData={setUserData} />
            } />
            <Route path="/register" element={
                <RegisterPage setIsAuth={setIsAuth} setUserData={setUserData} />
            } />
            
            <Route path="/" element={
                <ProtectedRoute isAuth={isAuth}>
                    <MainPage userData={userData} />
                </ProtectedRoute>
            } />
      
            <Route path="/card/:id" element={
                <ProtectedRoute isAuth={isAuth}>
                    <CardPage userData={userData} />
                </ProtectedRoute>
            } />

            <Route path="/card/new" element={
                <ProtectedRoute isAuth={isAuth}>
                    <NewCardPage userData={userData} />
                </ProtectedRoute>
            } />
      
            <Route path="/exit" element={
                <ProtectedRoute isAuth={isAuth}>
                    <ExitPage setIsAuth={setIsAuth} setUserData={setUserData} userData={userData} />
                </ProtectedRoute>
            } />
            
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
        
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from './ProtectedRoute';
import MainPage from '../pages/MainPage/MainPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import CardPage from '../pages/CardPage/CardPage';
import ExitPage from '../pages/ExitPage/ExitPage';
import NewCardPage from '../pages/NewCardPage/NewCardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Layout from './Layout/Layout.jsx';

function AppRoutes({ isAuth, setIsAuth, userData, setUserData, setToken, token }) {
    return (
        <Routes>
            <Route path="/login" element={
                <LoginPage
                    setIsAuth={setIsAuth}
                    setUserData={setUserData}
                    setToken={setToken}
                />
            } />
            <Route path="/register" element={
                <RegisterPage
                    setIsAuth={setIsAuth}
                    setUserData={setUserData}
                    setToken={setToken}
                />
            } />
            
            <Route element={
                <ProtectedRoute isAuth={isAuth}>
                    <Layout userData={userData} />
                </ProtectedRoute>
            }>
                <Route path="/" element={<MainPage userData={userData} />} />
                <Route path="/card/:id" element={<CardPage userData={userData} token={token} />} />
                <Route path="/card/new" element={<NewCardPage token={token} />} />
                <Route path="/exit" element={
                    <ExitPage
                        setIsAuth={setIsAuth}
                        setUserData={setUserData}
                        setToken={setToken}
                    />
                } />
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
        
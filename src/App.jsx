import AppRoutes from './components/AppRoutes';
import { GlobalStyles } from './components/GlobalStyles.styled';
import { useState, useEffect } from 'react';


function App() {
    const [isAuth, setIsAuth] = useState(() => {
        return JSON.parse(localStorage.getItem('isAuth')) || false;
    });
    
    const [userData, setUserData] = useState(() => {
        return JSON.parse(localStorage.getItem('userData')) || null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    });

    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(isAuth));
    }, [isAuth]);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    return (
        <div>
            <GlobalStyles />
            <AppRoutes 
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                userData={userData}
                setUserData={setUserData}
                token={token}
                setToken={setToken}
            />
        </div>
    );
}

export default App;
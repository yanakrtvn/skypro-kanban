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


    useEffect(() => {
        localStorage.setItem('isAuth', JSON.stringify(isAuth));
    }, [isAuth]);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <div className="wrapper">
            <GlobalStyles />
            <AppRoutes 
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                userData={userData}
                setUserData={setUserData}
            />
        </div>
    );
}

export default App;
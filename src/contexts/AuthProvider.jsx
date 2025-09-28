import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
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

    const login = (userData, token) => {
        setUserData(userData);
        setToken(token);
        setIsAuth(true);
    };

    const logout = () => {
        setUserData(null);
        setToken(null);
        setIsAuth(false);
    };

    const value = {
        isAuth,
        userData,
        token,
        login,
        logout,
        setUserData,
        setToken
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
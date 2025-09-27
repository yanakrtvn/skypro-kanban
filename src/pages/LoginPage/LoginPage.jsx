import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from '../../services/api';
import { 
    SLoginContainer, 
    SLoginForm, 
    SLoginInput, 
    SLoginButton,
    SLoginLink,
    SError
} from "./LoginPage.styled";

function LoginPage({ setIsAuth, setUserData, setToken }) {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (error) setError('');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Валидация
        if (!formData.login.trim() || !formData.password.trim()) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await authAPI.login({
                login: formData.login.trim(),
                password: formData.password
            });

            // Сохраняем токен и данные пользователя
            localStorage.setItem('token', response.user.token);
            setToken(response.user.token);
            setIsAuth(true);
            setUserData({
                name: response.user.name || response.user.login,
                login: response.user.login
            });
            
            navigate('/');
        } catch (error) {
            setError(error.message || 'Произошла ошибка при входе');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SLoginContainer>
            <h2>Вход</h2>
            <SLoginForm onSubmit={handleLogin}>
                {error && <SError>{error}</SError>}
                <div>
                    <SLoginInput
                        type="text"
                        name="login"
                        placeholder="Логин"
                        value={formData.login}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                </div>
                
                <div>
                    <SLoginInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                </div>
                
                <SLoginButton type="submit" disabled={isLoading}>
                    {isLoading ? 'Загрузка...' : 'Войти'}
                </SLoginButton>
            </SLoginForm>
            
            <p>
                Нужно зарегистрироваться?{' '}
                <SLoginLink to="/register">
                    Регистрируйтесь здесь
                </SLoginLink>
            </p>
        </SLoginContainer>
    );
}

export default LoginPage;
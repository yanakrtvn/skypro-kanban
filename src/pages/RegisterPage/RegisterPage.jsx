import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authAPI } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';
import { 
    SRegisterContainer, 
    SRegisterForm, 
    SRegisterInput, 
    SRegisterButton,
    SRegisterLink,
    SError
} from "./RegisterPage.styled";

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));

        if (error) setError('');
    };

    // Функция для проверки валидности полей
    const validateForm = () => {
        const trimmedName = formData.name.trim();
        const trimmedLogin = formData.login.trim();
        const trimmedPassword = formData.password.trim();

        if (!trimmedName) {
            setError('Введите имя');
            return false;
        }

        if (!trimmedLogin) {
            setError('Введите логин');
            return false;
        }

        if (trimmedLogin.length < 3) {
            setError('Логин должен содержать минимум 3 символа');
            return false;
        }

        if (!trimmedPassword) {
            setError('Введите пароль');
            return false;
        }

        if (trimmedPassword.length < 6) {
            setError('Пароль должен содержать минимум 6 символов');
            return false;
        }

        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Валидация формы
        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        try {
            // Отправляем очищенные от пробелов данные
            const response = await authAPI.register({
                name: formData.name.trim(),
                login: formData.login.trim(),
                password: formData.password // пароль не триммим, пробелы могут быть частью пароля
            });

            login(
                {
                    name: response.user.name,
                    login: response.user.login
                },
                response.user.token
            );
            
            navigate('/');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
       <SRegisterContainer>
            <h2>Регистрация</h2>
            <SRegisterForm onSubmit={handleRegister}>
                {error && <SError>{error}</SError>}

                <div>
                    <SRegisterInput
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                </div>
                
                <div>
                    <SRegisterInput
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
                    <SRegisterInput
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                </div>
                
                <SRegisterButton type="submit" disabled={isLoading}>
                    {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                </SRegisterButton>
            </SRegisterForm>
            
            <p>
                Уже есть аккаунт?{' '}
                <SRegisterLink to="/login">
                    Войдите здесь
                </SRegisterLink>
            </p>
        </SRegisterContainer>
    );
}

export default RegisterPage;
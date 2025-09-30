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

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await authAPI.register({
                name: formData.name,
                login: formData.login,
                password: formData.password
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
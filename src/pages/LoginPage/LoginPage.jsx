import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
    SLoginContainer, 
    SLoginForm, 
    SLoginInput, 
    SLoginButton,
    SLoginLink 
} from "./LoginPage.styled";

function LoginPage({ setIsAuth, setUserData }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (formData.username && formData.password) {
            setIsAuth(true);
            
            setUserData({
                name: formData.username,
                email: formData.username 
            });
            navigate('/');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

    return (
        <SLoginContainer>
            <h2>Вход</h2>
            <SLoginForm onSubmit={handleLogin}>
                <div>
                    <SLoginInput
                        type="text"
                        name="username"
                        placeholder="Эл.почта"
                        value={formData.username}
                        onChange={handleChange}
                        required
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
                    />
                </div>
                
                <SLoginButton type="submit">
                    Войти
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
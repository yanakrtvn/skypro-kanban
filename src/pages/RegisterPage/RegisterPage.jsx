import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
    SRegisterContainer, 
    SRegisterForm, 
    SRegisterInput, 
    SRegisterButton,
    SRegisterLink 
} from "./RegisterPage.styled";

function RegisterPage({ setIsAuth, setUserData }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
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

    const handleRegister = (e) => {
        e.preventDefault();
        
        if (formData.username && formData.email && formData.password) {
            console.log('Регистрация:', formData);
            
            setIsAuth(true);
            setUserData({
                name: formData.username,
                email: formData.email
            });
            navigate('/');
        } else {
            alert('Пожалуйста, заполните все поля');
        }
    };

    return (
       <SRegisterContainer>
            <h2>Регистрация</h2>
            <SRegisterForm onSubmit={handleRegister}>
                <div>
                    <SRegisterInput
                        type="text"
                        name="username"
                        placeholder="Имя"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div>
                    <SRegisterInput
                        type="email"
                        name="email"
                        placeholder="Эл.почта"
                        value={formData.email}
                        onChange={handleChange}
                        required
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
                    />
                </div>
                
                <SRegisterButton type="submit">
                    Зарегистрироваться
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
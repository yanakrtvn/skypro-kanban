import { useNavigate } from 'react-router-dom';
import { 
    SExitOverlay, 
    SExitModal, 
    SExitTitle, 
    SExitButtonGroup, 
    SExitButtonYes, 
    SExitButtonNo 
} from './ExitPage.styled';

function ExitPage({ setIsAuth, setUserData, setToken }) {
    const navigate = useNavigate();

    const handleExit = () => {
        setIsAuth(false);
        setUserData(null);
        setToken(null);
        navigate('/login');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <>
            <SExitOverlay />
            <SExitModal>
                <SExitTitle>Выйти из аккаунта?</SExitTitle>
                <SExitButtonGroup>
                    <SExitButtonYes onClick={handleExit}>
                        Да, выйти
                    </SExitButtonYes>
                    <SExitButtonNo onClick={handleCancel}>
                        Нет, остаться
                    </SExitButtonNo>
                </SExitButtonGroup>
            </SExitModal>
        </>
    );
}

export default ExitPage;
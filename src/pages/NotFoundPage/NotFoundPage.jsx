import { Link } from 'react-router-dom';
import { 
    SNotFoundContainer, 
    SNotFoundTitle, 
    SNotFoundText, 
    SNotFoundLink 
} from './NotFoundPage.styled';

function NotFoundPage() {
    return (
        <SNotFoundContainer>
            <SNotFoundTitle>404</SNotFoundTitle>
            <SNotFoundText>Страница не найдена</SNotFoundText>
            <SNotFoundLink as={Link} to="/">
                Вернуться на главную
            </SNotFoundLink>
        </SNotFoundContainer>
    );
}

export default NotFoundPage;
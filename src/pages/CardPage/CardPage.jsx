import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import { 
    SCardPage, 
    SCardPageContainer, 
    SCardPageContent, 
    SCardPageHeader,
    SCardPageTitle,
    SCardPageTheme,
    SCardPageInfo,
    SCardPageDescription,
    SCardPageActions,
    SCardPageButton,
    SCardPageBackLink
} from "./CardPage.styled.js";


function CardPage({ userData }) {
    const { id } = useParams();

    const cardData = {
        id: id,
        title: `Задача #${id}`,
        topic: "Web Design",
        date: "30.10.2023",
        status: "В работе",
        description: `Это подробное описание задачи с ID: ${id}.`
    };

    return (
        <>
        <Header userData={userData}/>
        <SCardPage>
                <div className="container">
                    <SCardPageContainer>
                        <SCardPageBackLink to="/">
                            ← Назад к доске
                        </SCardPageBackLink>
                        
                        <SCardPageContent>
                            <SCardPageHeader>
                                <SCardPageTitle>{cardData.title}</SCardPageTitle>
                                <SCardPageTheme $themecolor={cardData.topic}>
                                    <p>{cardData.topic}</p>
                                </SCardPageTheme>
                            </SCardPageHeader>
                            
                            <SCardPageInfo>
                                <div className="info-item">
                                    <span className="label">Статус:</span>
                                    <span className="value">{cardData.status}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">Дата создания:</span>
                                    <span className="value">{cardData.date}</span>
                                </div>
                                <div className="info-item">
                                    <span className="label">ID карточки:</span>
                                    <span className="value">#{cardData.id}</span>
                                </div>
                            </SCardPageInfo>
                            
                            <SCardPageDescription>
                                <h3>Описание задачи</h3>
                                <p>{cardData.description}</p>
                            </SCardPageDescription>
                            
                            <SCardPageActions>
                                <SCardPageButton as={Link} to={`/card/${id}/edit`} className="_btn-bg _hover01">
                                    Редактировать
                                </SCardPageButton>
                                <SCardPageButton className="_btn-bor _hover03">
                                    Удалить
                                </SCardPageButton>
                            </SCardPageActions>
                        </SCardPageContent>
                    </SCardPageContainer>
                </div>
            </SCardPage>
        </>
    );
}

export default CardPage;
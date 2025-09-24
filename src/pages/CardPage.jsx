import { useParams } from "react-router-dom";
import Header from "../components/Header/Header.jsx";

function CardPage() {
    const { id } = useParams();

    return (
        <>
        <Header />
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h2>Просмотр и редактирование карточки #{id}</h2>
                <div style={{ 
                    border: '1px solid #ddd', 
                    padding: '20px', 
                    borderRadius: '8px',
                    marginTop: '20px'
                }}>
                    <p><strong>ID карточки:</strong> {id}</p>
                    <p><strong>Название:</strong> Задача #{id}</p>
                    <p><strong>Статус:</strong> В работе</p>
                    <p><strong>Дата создания:</strong> 30.10.2023</p>
                    <p><strong>Описание:</strong> Это подробное описание задачи с ID: {id}</p>
                </div>
            </div>
        </>
    );
}

export default CardPage;
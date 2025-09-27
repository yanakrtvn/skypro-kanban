import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { kanbanAPI } from "../../services/api.js";
import Header from "../../components/Header/Header.jsx";
import { 
  SNewCardPage,
  SNewCardContainer,
  SNewCardForm,
  SNewCardInput,
  SNewCardTextarea,
  SNewCardSelect,
  SNewCardButton,
  SError
} from "./NewCardPage.styled";

// Выносим константы за пределы компонента
const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const topic = [
  "Web Design",
  "Research",
  "Copywriting",
];

function NewCardPage({ userData, token }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    topic: topic[0],
    status: statuses[0],
    description: '',
    date: new Date().toISOString().split('T')[0] // текущая дата по умолчанию
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валидация
    if (!formData.title.trim()) {
      setError('Пожалуйста, введите название задачи');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const authToken = token || localStorage.getItem('token');
      
      if (!authToken) {
        throw new Error('Токен авторизации не найден');
      }

      // Используем правильный метод postTask вместо createTask
      await kanbanAPI.postTask({
        token: authToken,
        task: {
          title: formData.title.trim(),
          topic: formData.topic,
          status: formData.status,
          description: formData.description.trim(),
          date: formData.date
        }
      });

      // Перенаправляем на главную страницу после успешного создания
      navigate('/');
    } catch (error) {
      console.error('Ошибка создания задачи:', error);
      setError(error.message || 'Произошла ошибка при создании задачи');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

return (
    <>
      <Header userData={userData} />
      <SNewCardPage>
        <div className="container">
          <SNewCardContainer>
            <h2>Создание новой задачи</h2>
              
            {error && <SError>{error}</SError>}
              
            <SNewCardForm onSubmit={handleSubmit}>
              <div>
                <label>Название задачи *</label>
                <SNewCardInput
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Введите название задачи"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label>Тема</label>
                <SNewCardSelect
                  name="topics"
                  value={formData.topic}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  {topic.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </SNewCardSelect>
              </div>

              <div>
                <label>Статус</label>
                <SNewCardSelect
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </SNewCardSelect>
              </div>

              <div>
                <label>Описание</label>
                <SNewCardTextarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Введите описание задачи"
                  rows="4"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label>Дата выполнения</label>
                <SNewCardInput
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <SNewCardButton 
                  type="submit" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Создание...' : 'Создать задачу'}
                </SNewCardButton>
                  
                <SNewCardButton 
                  type="button" 
                  onClick={handleCancel}
                  disabled={isLoading}
                  style={{ backgroundColor: '#6c757d' }}
                >
                  Отмена
                </SNewCardButton>
              </div>
            </SNewCardForm>
          </SNewCardContainer>
        </div>
      </SNewCardPage>
    </>
  );
}

export default NewCardPage;

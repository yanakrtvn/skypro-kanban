import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { kanbanAPI } from "../../services/api.js";
import { useAuth } from "../../contexts/AuthContext";
import { 
  SCardPageContainer,
  SCardPageContent,
  SCardPageTitle,
  SCardPageButton,
  SLoadingText,
  SError,
  SCardPageForm,
  SCardPageInput,
  SCardPageSelect,
  SCardPageTextarea,
  SButtonsGroup
} from "./CardPage.styled";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const topics = [
  "Web Design",
  "Research",
  "Copywriting",
];

function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    status: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        const authToken = token || localStorage.getItem('token');
        
        if (!authToken) {
          throw new Error('Токен авторизации не найден');
        }

        const taskData = await kanbanAPI.getTask({ 
          id: id, 
          token: authToken 
        });
        
        setTask(taskData);
        setFormData({
          title: taskData.title || '',
          topic: taskData.topic || topics[0],
          status: taskData.status || statuses[0],
          description: taskData.description || '',
          date: taskData.date ? taskData.date.split('T')[0] : new Date().toISOString().split('T')[0]
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchTask();
    }
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const authToken = token || localStorage.getItem('token');
      
      await kanbanAPI.editTask({
        id: id,
        token: authToken,
        task: {
          title: formData.title,
          topic: formData.topic,
          status: formData.status,
          description: formData.description,
          date: new Date(formData.date).toISOString()
        }
      });

      setIsEditing(false);
      const updatedTask = await kanbanAPI.getTask({ id, token: authToken });
      setTask(updatedTask);
    } catch (error) {
      setError(error.message);
      console.error('Ошибка сохранения задачи:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      try {
        const authToken = token || localStorage.getItem('token');
        
        await kanbanAPI.deleteTask({ id, token: authToken });
        navigate('/');
      } catch (error) {
        setError(error.message);
        console.error('Ошибка удаления задачи:', error);
      }
    }
  };

  const handleCancel = () => {
    if (task) {
      setFormData({
        title: task.title || '',
        topic: task.topic || topics[0],
        status: task.status || statuses[0],
        description: task.description || '',
        date: task.date ? task.date.split('T')[0] : new Date().toISOString().split('T')[0]
      });
    }
    setIsEditing(false);
  };

  const handleClose = () => {
    navigate('/');
  };

  if (isLoading) {
    return (
      <SCardPageContainer>
        <SLoadingText>Загрузка задачи...</SLoadingText>
      </SCardPageContainer>
    );
  }

  if (!task && !isLoading) {
    return (
      <SCardPageContainer>
        <SError>Задача не найдена</SError>
        <SCardPageButton onClick={() => navigate('/')}>
          Вернуться на главную
        </SCardPageButton>
      </SCardPageContainer>
    );
  }

  return (
    <SCardPageContainer>
      {error && <SError>{error}</SError>}
      <SCardPageContent>
        <SCardPageTitle>
          {isEditing ? "Редактирование задачи" : task.title}
        </SCardPageTitle>

        {isEditing ? (
          <SCardPageForm onSubmit={handleSave}>
            <div>
              <label>Название задачи:</label>
              <SCardPageInput
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label>Статус:</label>
              <SCardPageSelect
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </SCardPageSelect>
            </div>
            
            <div>
              <label>Тема:</label>
              <SCardPageSelect
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              >
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </SCardPageSelect>
            </div>

            <div>
              <label>Описание задачи:</label>
              <SCardPageTextarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <div>
              <label>Даты:</label>
              <SCardPageInput
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <SButtonsGroup>
              <SCardPageButton type="submit" $primary>
                Сохранить
              </SCardPageButton>
              <SCardPageButton type="button" onClick={handleCancel} $secondary>
                Отменить
              </SCardPageButton>
              <SCardPageButton type="button" onClick={handleDelete} $danger>
                Удалить задачу
              </SCardPageButton>
              <SCardPageButton type="button" onClick={handleClose} $secondary>
                Закрыть
              </SCardPageButton>
            </SButtonsGroup>
          </SCardPageForm>
        ) : (
          <div>
            <p><strong>Статус:</strong> {task.status}</p>
            <p><strong>Описание:</strong> {task.description || 'Нет описания'}</p>
            <p><strong>Тема:</strong> {task.topic}</p>
            <p><strong>Даты:</strong> {new Date(task.date).toLocaleDateString()}</p>
            
            <SButtonsGroup>
              <SCardPageButton onClick={() => setIsEditing(true)} $primary>
                Редактировать
              </SCardPageButton>
              <SCardPageButton onClick={handleDelete} $danger>
                Удалить задачу
              </SCardPageButton>
              <SCardPageButton onClick={handleClose} $secondary>
                Закрыть
              </SCardPageButton>
            </SButtonsGroup>
          </div>
        )}
      </SCardPageContent>
    </SCardPageContainer>
  );
}

export default CardPage;
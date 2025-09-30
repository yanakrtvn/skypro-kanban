import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../../contexts/TaskContext";
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
  const { getTaskById, updateTask, deleteTask } = useTasks();
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);

  const task = getTaskById(id);

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        topic: task.topic || topics[0],
        status: task.status || statuses[0],
        description: task.description || '',
        date: task.date ? task.date.split('T')[0] : new Date().toISOString().split('T')[0]
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData) return;
    
    try {
      setIsLoading(true);
      setError('');
      
      await updateTask(id, {
        title: formData.title,
        topic: formData.topic,
        status: formData.status,
        description: formData.description,
        date: new Date(formData.date).toISOString()
      });

      setIsEditing(false);
    } catch (error) {
      setError(error.message);
      console.error('Ошибка сохранения задачи:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      try {
        setIsLoading(true);
        await deleteTask(id);
        navigate('/');
      } catch (error) {
        setError(error.message);
        console.error('Ошибка удаления задачи:', error);
      } finally {
        setIsLoading(false);
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

  if (!task || !formData) {
    return (
      <SCardPageContainer>
        <SLoadingText>Загрузка задачи...</SLoadingText>
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
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label>Статус:</label>
              <SCardPageSelect
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={isLoading}
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
                disabled={isLoading}
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
                disabled={isLoading}
              />
            </div>

            <div>
              <label>Даты:</label>
              <SCardPageInput
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <SButtonsGroup>
              <SCardPageButton 
                type="submit" 
                $primary
                disabled={isLoading}
              >
                {isLoading ? 'Сохранение...' : 'Сохранить'}
              </SCardPageButton>
              <SCardPageButton 
                type="button" 
                onClick={handleCancel}
                $secondary
                disabled={isLoading}
              >
                Отменить
              </SCardPageButton>
              <SCardPageButton 
                type="button" 
                onClick={handleDelete} 
                $danger
                disabled={isLoading}
              >
                Удалить задачу
              </SCardPageButton>
              <SCardPageButton 
                type="button" 
                onClick={handleClose} 
                $secondary
              >
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
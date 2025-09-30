import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../../contexts/TaskContext";
import { useAuth } from "../../contexts/AuthContext";
import { 
  SNewCardContainer,
  SNewCardForm,
  SNewCardInput,
  SNewCardTextarea,
  SNewCardButton,
  SError,
  STopicButtons,
  STopicButton,
  SButtonsGroup,
  SFormGroup,
  SLabel,
  SFieldError
} from "./NewCardPage.styled";

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

function NewCardPage() {
  const navigate = useNavigate();
  useAuth();
  const { addTask } = useTasks();

  const [formData, setFormData] = useState({
    title: '',
    topic: topic[0],
    status: statuses[0],
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formData.title.trim()) {
      errors.title = 'Введите название задачи...';
    } else if (formData.title.trim().length < 3) {
      errors.title = 'Название должно содержать минимум 3 символа';
    }

    if (!formData.description.trim()) {
      errors.description = 'Введите описание задачи...';
    } else if (formData.description.trim().length < 3) {
      errors.description = 'Описание должно содержать минимум 3 символа';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    if (error) setError('');
  };

  const handleTopicChange = (topicItem) => {
    setFormData(prevState => ({
      ...prevState,
      topic: topicItem
    }));

    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setError('Пожалуйста, исправьте ошибки в форме');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const taskData = {
        title: formData.title.trim(),
        topic: formData.topic,
        status: formData.status,
        description: formData.description.trim(),
        date: formData.date
      };

      await addTask(taskData);

      navigate('/');

    } catch (error) {
      console.error('Ошибка создания задачи:', error);
      
      if (error.message.includes('description') && error.message.includes('empty')) {
        setError('Описание задачи не может быть пустым. Пожалуйста, добавьте описание.');
      } else if (error.message.includes('title') && error.message.includes('empty')) {
        setError('Название задачи не может быть пустым. Пожалуйста, введите название.');
      } else {
        setError(error.message || 'Произошла ошибка при создании задачи. Проверьте все поля и попробуйте снова.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <SNewCardContainer>
      <h2>Создание задачи</h2>
        
      {error && (
        <SError>
          <strong>Ошибка:</strong> {error}
        </SError>
      )}
        
      <SNewCardForm onSubmit={handleSubmit}>
        <SFormGroup $hasError={!!fieldErrors.title}>
          <SLabel htmlFor="title">
            Название задачи
          </SLabel>
          <SNewCardInput
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Введите название задачи..."
            required
            disabled={isLoading}
            $hasError={!!fieldErrors.title}
          />
          {fieldErrors.title && (
            <SFieldError>{fieldErrors.title}</SFieldError>
          )}
        </SFormGroup>

        <SFormGroup $hasError={!!fieldErrors.description}>
          <SLabel htmlFor="description">
            Описание задачи
          </SLabel>
          <SNewCardTextarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Введите описание задачи..."
            rows="4"
            disabled={isLoading}
            $hasError={!!fieldErrors.description}
          />
          {fieldErrors.description && (
            <SFieldError>{fieldErrors.description}</SFieldError>
          )}
        </SFormGroup>

        <SFormGroup>
          <SLabel>Категория</SLabel>
          <STopicButtons>
            {topic.map(topicItem => (
              <STopicButton
                key={topicItem}
                type="button"
                onClick={() => handleTopicChange(topicItem)}
                disabled={isLoading}
                $active={formData.topic === topicItem}
              >
                {topicItem}
              </STopicButton>
            ))}
          </STopicButtons>
        </SFormGroup>

        <SFormGroup>
          <SLabel htmlFor="date">Даты</SLabel>
          <SNewCardInput
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            disabled={isLoading}
          />
        </SFormGroup>

        <SButtonsGroup>
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
            $cancel
          >
            Отмена
          </SNewCardButton>
        </SButtonsGroup>
      </SNewCardForm>
    </SNewCardContainer>
  );
}

export default NewCardPage;
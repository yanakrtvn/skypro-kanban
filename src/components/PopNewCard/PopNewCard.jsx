import { useState } from "react";
import { useTasks } from "../../contexts/TaskContext";
import Calendar from "../Calendar.jsx";
import {
  SPopNewCard,
  SPopNewCardContainer,
  SPopNewCardBlock,
  SPopNewCardContent,
  SPopNewCardTtl,
  SPopNewCardClose,
  SPopNewCardWrap,
  SFormNew,
  SFormNewBlock,
  SFormNewInput,
  SFormNewArea,
  SCategories,
  SCategoriesP,
  SCategoriesThemes,
  SCategoriesTheme,
  SFormNewCreate
} from "./PopNewCard.styled.js";

function PopNewCard({ $isOpen, onClose }) {
  const { addTask, loadTasks } = useTasks();
  
  const [formData, setFormData] = useState({
    title: '',
    topic: 'Web Design',
    status: 'Без статуса',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!$isOpen) return null;

  const handleClose = (e) => {
    e.preventDefault();
    setFormData({
      title: '',
      topic: 'Web Design',
      status: 'Без статуса',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
    setError('');
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date: date
    }));
  };

  const handleTopicChange = (topic) => {
    setFormData(prev => ({
      ...prev,
      topic
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Заполните все обязательные поля');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await addTask({
        title: formData.title.trim(),
        topic: formData.topic,
        status: formData.status,
        description: formData.description.trim(),
        date: formData.date
      });

      await loadTasks(true);

      setFormData({
        title: '',
        topic: 'Web Design',
        status: 'Без статуса',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
      onClose();
      
    } catch (error) {
      setError(error.message || 'Ошибка при создании задачи');
      console.error('Ошибка создания задачи:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const topics = ["Web Design", "Research", "Copywriting"];

  return (
    <SPopNewCard $isOpen={$isOpen}>
      <SPopNewCardContainer>
        <SPopNewCardBlock>
          <SPopNewCardContent>
            <SPopNewCardTtl>Создание задачи</SPopNewCardTtl>
            <SPopNewCardClose onClick={handleClose}>
              &#10006;
            </SPopNewCardClose>
            
            {error && (
              <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
                {error}
              </div>
            )}
            
            <SPopNewCardWrap>
              <SFormNew id="formNewCard" onSubmit={handleSubmit}>
                <SFormNewBlock>
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <SFormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                    disabled={isLoading}
                  />
                </SFormNewBlock>
                
                <SFormNewBlock>
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <SFormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  ></SFormNewArea>
                </SFormNewBlock>
              </SFormNew>
              
              <Calendar 
                selectedDate={formData.date}
                onDateChange={handleDateChange}
              />
            </SPopNewCardWrap>
            
            <SCategories>
              <SCategoriesP className="subttl">Категория</SCategoriesP>
              <SCategoriesThemes>
                {topics.map(topicItem => (
                  <SCategoriesTheme 
                    key={topicItem}
                    className={`${topicItem === 'Web Design' ? '_orange' : topicItem === 'Research' ? '_green' : '_purple'} ${formData.topic === topicItem ? '_active-category' : ''}`}
                    onClick={() => !isLoading && handleTopicChange(topicItem)}
                    style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
                  >
                    <p className={topicItem === 'Web Design' ? '_orange' : topicItem === 'Research' ? '_green' : '_purple'}>
                      {topicItem}
                    </p>
                  </SCategoriesTheme>
                ))}
              </SCategoriesThemes>
            </SCategories>
            
            <SFormNewCreate 
              className="_hover01" 
              onClick={handleSubmit}
              disabled={isLoading}
              style={{ cursor: isLoading ? 'not-allowed' : 'pointer' }}
            >
              {isLoading ? 'Создание...' : 'Создать задачу'}
            </SFormNewCreate>
          </SPopNewCardContent>
        </SPopNewCardBlock>
      </SPopNewCardContainer>
    </SPopNewCard>
  );
}

export default PopNewCard;
import { useState, useEffect } from "react";
import { useTasks } from "../../contexts/TaskContext";
import Calendar from "../Calendar.jsx";
import {
  SPopBrowse,
  SPopBrowseContainer,
  SPopBrowseBlock,
  SPopBrowseContent,
  SPopBrowseTopBlock,
  SPopBrowseTtl,
  SPopBrowseWrap,
  SFormBrowse,
  SFormBrowseBlock,
  SFormBrowseArea,
  SStatus,
  SStatusP,
  SStatusThemes,
  SStatusTheme,
  SCategories,
  SCategoriesP,
  SCategoriesTheme,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit
} from "./PopBrowse.styled.js";

function PopBrowse({ $isOpen, onClose, taskId }) {
  const { getTaskById, updateTask, deleteTask } = useTasks();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    topic: 'Web Design',
    status: 'Без статуса',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const task = taskId ? getTaskById(taskId) : null;

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        topic: task.topic || 'Web Design',
        status: task.status || 'Без статуса',
        description: task.description || '',
        date: task.date ? new Date(task.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      });
      setError('');
    }
  }, [task, taskId]);

  if (!$isOpen || !task) return null;

  const handleClose = (e) => {
    e.preventDefault();
    setIsEditing(false);
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

  const handleStatusChange = (status) => {
    if (!isEditing || isLoading) return;
    
    setFormData(prev => ({
      ...prev,
      status
    }));
  };

  const handleTopicChange = (topic) => {
    setFormData(prev => ({
      ...prev,
      topic
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      setError('Введите название задачи');
      return;
    }

    if (!formData.description.trim()) {
      setError('Введите описание задачи');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await updateTask(taskId, {
        title: formData.title.trim(),
        topic: formData.topic,
        status: formData.status,
        description: formData.description.trim(),
        date: formData.date
      });

      setIsEditing(false);
      setError('');
    } catch (error) {
      setError(error.message || 'Ошибка при сохранении задачи');
      console.error('Ошибка сохранения задачи:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      setIsLoading(true);
      try {
        await deleteTask(taskId);
        onClose();
      } catch (error) {
        setError(error.message || 'Ошибка при удалении задачи');
        console.error('Ошибка удаления задачи:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCancelEdit = () => {
    if (task) {
      setFormData({
        title: task.title || '',
        topic: task.topic || 'Web Design',
        status: task.status || 'Без статуса',
        description: task.description || '',
        date: task.date ? new Date(task.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
      });
    }
    setIsEditing(false);
    setError('');
  };

  const statuses = [
    "Без статуса",
    "Нужно сделать", 
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const topics = ["Web Design", "Research", "Copywriting"];

  const getTopicClass = (topic) => {
    switch (topic) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_orange';
    }
  };

  const getStatusClass = (statusItem) => {
    if (!isEditing) {
      return formData.status === statusItem ? '_gray' : '_hide';
    } else {
      return formData.status === statusItem ? '_gray' : '_border';
    }
  };

  return (
    <SPopBrowse $isOpen={$isOpen}>
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            {error && (
              <div style={{ 
                color: 'red', 
                marginBottom: '15px', 
                textAlign: 'center',
                padding: '10px',
                backgroundColor: '#ffe6e6',
                borderRadius: '4px'
              }}>
                {error}
              </div>
            )}

            <SPopBrowseTopBlock>
              {isEditing ? (
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    color: 'inherit',
                    width: '100%',
                    outline: 'none',
                    borderBottom: '1px solid #ccc',
                    padding: '2px 0'
                  }}
                />
              ) : (
                <SPopBrowseTtl>{task.title}</SPopBrowseTtl>
              )}
              <SCategoriesTheme className={`${getTopicClass(formData.topic)} _active-category`}>
                {isEditing ? (
                  <select
                    value={formData.topic}
                    onChange={(e) => handleTopicChange(e.target.value)}
                    disabled={isLoading}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: 'inherit',
                      outline: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontWeight: 'inherit'
                    }}
                  >
                    {topics.map(topicItem => (
                      <option key={topicItem} value={topicItem}>{topicItem}</option>
                    ))}
                  </select>
                ) : (
                  <p>{task.topic}</p>
                )}
              </SCategoriesTheme>
            </SPopBrowseTopBlock>
            
            <SStatus>
              <SStatusP className="subttl">Статус</SStatusP>
              <SStatusThemes>
                {statuses.map((statusItem) => (
                  <SStatusTheme 
                    key={statusItem}
                    className={getStatusClass(statusItem)}
                    onClick={() => handleStatusChange(statusItem)}
                    style={{ 
                      cursor: isEditing && !isLoading ? 'pointer' : 'default',
                    }}
                  >
                    <p>{statusItem}</p>
                  </SStatusTheme>
                ))}
              </SStatusThemes>
            </SStatus>
            
            <SPopBrowseWrap>
              <SFormBrowse id="formBrowseCard" onSubmit={handleSave}>
                <SFormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <SFormBrowseArea
                    name="description"
                    id="textArea01"
                    value={formData.description}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    disabled={isLoading}
                    style={{
                      cursor: isEditing ? 'text' : 'default',
                      backgroundColor: isEditing ? '#fff' : '#f6f6f6',
                      border: isEditing ? '1px solid #ccc' : 'none'
                    }}
                  />
                </SFormBrowseBlock>
              </SFormBrowse>
              
              <Calendar 
                selectedDate={formData.date}
                onDateChange={isEditing ? handleDateChange : undefined}
              />
            </SPopBrowseWrap>
            
            <SCategories className="theme-down">
              <SCategoriesP className="subttl">Категория</SCategoriesP>
              <SCategoriesTheme className={`${getTopicClass(formData.topic)} _active-category`}>
                {isEditing ? (
                  <select
                    value={formData.topic}
                    onChange={(e) => handleTopicChange(e.target.value)}
                    disabled={isLoading}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: 'inherit',
                      outline: 'none',
                      cursor: 'pointer',
                      fontSize: 'inherit',
                      fontWeight: 'inherit'
                    }}
                  >
                    {topics.map(topicItem => (
                      <option key={topicItem} value={topicItem}>{topicItem}</option>
                    ))}
                  </select>
                ) : (
                  <p>{task.topic}</p>
                )}
              </SCategoriesTheme>
            </SCategories>
            
            <SPopBrowseBtnBrowse style={{ display: isEditing ? 'none' : 'flex' }}>
              <div className="btn-group">
                <button 
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={() => setIsEditing(true)}
                  disabled={isLoading}
                  type="button"
                >
                  Редактировать задачу
                </button>
                <button 
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                  disabled={isLoading}
                  type="button"
                >
                  Удалить задачу
                </button>
              </div>
              <button 
                className="btn-browse__close _btn-bg _hover01" 
                onClick={handleClose}
                disabled={isLoading}
                type="button"
              >
                Закрыть
              </button>
            </SPopBrowseBtnBrowse>
            
            <SPopBrowseBtnEdit style={{ display: isEditing ? 'flex' : 'none' }}>
              <div className="btn-group">
                <button 
                  className="btn-edit__edit _btn-bg _hover01"
                  type="submit"
                  form="formBrowseCard"
                  disabled={isLoading}
                >
                  {isLoading ? 'Сохранение...' : 'Сохранить'}
                </button>
                <button 
                  className="btn-edit__edit _btn-bor _hover03"
                  onClick={handleCancelEdit}
                  disabled={isLoading}
                  type="button"
                >
                  Отменить
                </button>
                <button 
                  className="btn-edit__delete _btn-bor _hover03" 
                  onClick={handleDelete}
                  disabled={isLoading}
                  type="button"
                >
                  Удалить задачу
                </button>
              </div>
              <button 
                className="btn-edit__close _btn-bg _hover01" 
                onClick={handleClose}
                disabled={isLoading}
                type="button"
              >
                Закрыть
              </button>
            </SPopBrowseBtnEdit>
          </SPopBrowseContent>
        </SPopBrowseBlock>
      </SPopBrowseContainer>
    </SPopBrowse>
  );
}

export default PopBrowse;
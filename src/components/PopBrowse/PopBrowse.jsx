import { useState, useEffect } from "react";
import { useTasks } from "../../contexts/TaskContext";
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
  SCalendar,
  SCalendarTtl,
  SCalendarBlock,
  // SCalendarContent,
  // SCalendarDaysNames,
  // SCalendarCells,
  // SCalendarCell,
  // SCalendarNav,
  SCalendarPeriod,
  // SNavActions,
  // SNavAction,
  SCategories,
  SCategoriesP,
  SCategoriesTheme,
  SPopBrowseBtnBrowse,
  SPopBrowseBtnEdit
} from "./PopBrowse.styled.js";

function PopBrowse({ isOpen, onClose, taskId }) {
  const { getTaskById, updateTask, deleteTask } = useTasks();
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
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
    }
  }, [task]);

  if (!isOpen || !task) return null;

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

  const handleStatusChange = (status) => {
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
    
    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Заполните все обязательные поля');
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
    setFormData({
      title: task.title || '',
      topic: task.topic || 'Web Design',
      status: task.status || 'Без статуса',
      description: task.description || '',
      date: task.date ? new Date(task.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
    });
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

  return (
    <SPopBrowse $isOpen={isOpen}>
      <SPopBrowseContainer>
        <SPopBrowseBlock>
          <SPopBrowseContent>
            {error && (
              <div style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
                {error}
              </div>
            )}

            <SPopBrowseTopBlock>
              {isEditing ? (
                <input
                  type="text"
                  name="title"
                  value={formData?.title || ''}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    fontSize: 'inherit',
                    fontWeight: 'inherit',
                    color: 'inherit',
                    width: '100%',
                    outline: 'none'
                  }}
                />
              ) : (
                <SPopBrowseTtl>{task.title}</SPopBrowseTtl>
              )}
              <SCategoriesTheme className={`${getTopicClass(task.topic)} _active-category`}>
                <p className={getTopicClass(task.topic)}>
                  {isEditing ? (
                    <select
                      value={formData?.topic || 'Web Design'}
                      onChange={(e) => handleTopicChange(e.target.value)}
                      disabled={isLoading}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: 'inherit',
                        outline: 'none'
                      }}
                    >
                      {topics.map(topicItem => (
                        <option key={topicItem} value={topicItem}>{topicItem}</option>
                      ))}
                    </select>
                  ) : (
                    task.topic
                  )}
                </p>
              </SCategoriesTheme>
            </SPopBrowseTopBlock>
            
            <SStatus>
              <SStatusP className="subttl">Статус</SStatusP>
              <SStatusThemes>
                {statuses.map((statusItem) => (
                  <SStatusTheme 
                    key={statusItem}
                    className={isEditing ? 
                      (formData?.status === statusItem ? '_gray' : '_hide') : 
                      (task.status === statusItem ? '_gray' : '_hide')
                    }
                    onClick={() => isEditing && !isLoading && handleStatusChange(statusItem)}
                    style={{ 
                      cursor: isEditing && !isLoading ? 'pointer' : 'default'
                    }}
                  >
                    <p className={isEditing && formData?.status === statusItem ? '_gray' : ''}>
                      {statusItem}
                    </p>
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
                    value={formData?.description || ''}
                    onChange={handleInputChange}
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    disabled={isLoading}
                  ></SFormBrowseArea>
                </SFormBrowseBlock>
              </SFormBrowse>
              
              <SCalendar>
                <SCalendarTtl className="subttl">Даты</SCalendarTtl>
                <SCalendarBlock>
                  <SCalendarPeriod>
                    <p className="calendar__p date-end">
                      Срок исполнения:{" "}
                      {isEditing ? (
                        <input 
                          type="date" 
                          name="date"
                          value={formData?.date || ''}
                          onChange={handleInputChange}
                          disabled={isLoading}
                          style={{ 
                            border: 'none', 
                            background: 'transparent',
                            color: 'inherit',
                            font: 'inherit'
                          }}
                        />
                      ) : (
                        <span className="date-control">
                          {task.date ? new Date(task.date).toLocaleDateString('ru-RU') : 'Не указано'}
                        </span>
                      )}
                    </p>
                  </SCalendarPeriod>
                </SCalendarBlock>
              </SCalendar>
            </SPopBrowseWrap>
            
            <SCategories className="theme-down">
              <SCategoriesP className="subttl">Категория</SCategoriesP>
              <SCategoriesTheme className={`${getTopicClass(task.topic)} _active-category`}>
                <p className={getTopicClass(task.topic)}>
                  {isEditing ? (
                    <select
                      value={formData?.topic || 'Web Design'}
                      onChange={(e) => handleTopicChange(e.target.value)}
                      disabled={isLoading}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        color: 'inherit',
                        outline: 'none'
                      }}
                    >
                      {topics.map(topicItem => (
                        <option key={topicItem} value={topicItem}>{topicItem}</option>
                      ))}
                    </select>
                  ) : (
                    task.topic
                  )}
                </p>
              </SCategoriesTheme>
            </SCategories>
            
            <SPopBrowseBtnBrowse style={{ display: isEditing ? 'none' : 'flex' }}>
              <div className="btn-group">
                <button 
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={() => setIsEditing(true)}
                  disabled={isLoading}
                >
                  Редактировать задачу
                </button>
                <button 
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  Удалить задачу
                </button>
              </div>
              <button 
                className="btn-browse__close _btn-bg _hover01" 
                onClick={handleClose}
                disabled={isLoading}
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
                >
                  Отменить
                </button>
                <button 
                  className="btn-edit__delete _btn-bor _hover03" 
                  onClick={handleDelete}
                  disabled={isLoading}
                >
                  Удалить задачу
                </button>
              </div>
              <button 
                className="btn-edit__close _btn-bg _hover01" 
                onClick={handleClose}
                disabled={isLoading}
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
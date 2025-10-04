import Card from "../Card/Card.jsx";
import { useState } from "react";
import { 
  SColumnContainer,
  SColumnTitle,
  SCardsContainer,
} from "./Column.styled.js";
import { useTasks } from '../../contexts/TaskContext';

function Column({ title, onCardClick }) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const { tasks, updateTask, deleteTask } = useTasks();

  const filteredTasks = tasks.filter(task => task.status === title);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    
    const taskId = e.dataTransfer.getData('taskId');
    if (taskId) {
      updateTask(taskId, { status: title });
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleEditTask = (taskId) => {
    onCardClick(taskId);
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      deleteTask(taskId);
    }
  };

  return (
    <SColumnContainer 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $isDraggingOver={isDraggingOver}
    >
      <SColumnTitle>
        <p>{title}</p>
      </SColumnTitle>
      <SCardsContainer>
        {filteredTasks.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            title={card.title}
            topic={card.topic}
            date={formatDate(card.date)}
            onCardClick={onCardClick}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </SCardsContainer>
    </SColumnContainer>
  );
}

export default Column;
import Card from "../Card/Card.jsx";
import { useState } from "react";
import { 
  SColumnContainer,
  SColumnTitle,
  SCardsContainer,
} from "./Column.styled.js";

function Column({ title, cards, onTaskUpdate, onTaskDelete }) {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

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
    if (taskId && onTaskUpdate) {
      onTaskUpdate(taskId, title);
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
        {cards.map((card) => (
          <Card
            key={card._id}
            id={card._id}
            title={card.title}
            topic={card.topic}
            date={formatDate(card.date)}
            onDelete={onTaskDelete}
          />
        ))}
      </SCardsContainer>
    </SColumnContainer>
  );
}

export default Column;
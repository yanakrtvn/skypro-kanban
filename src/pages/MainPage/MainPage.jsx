import Column from "../../components/Column/Column.jsx";
import TaskModal from "../../components/TaskModal/TaskModal.jsx";
import { useEffect, useState } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { 
  SMainBlock,
  SMainContent,
  SLoadingContent,
  SLoadingText,
  SError
} from "./MainPage.styled";

function MainPage() {
  const { 
    tasks, 
    isLoading, 
    error, 
    loadTasks,
    deleteTask 
  } = useTasks();
  
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    if (tasks.length === 0 && !isLoading) {
      loadTasks();
    }
  }, [tasks.length, isLoading, loadTasks]);

  const handleCardClick = (taskId) => {
    setSelectedTaskId(taskId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTaskId(null);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    handleCloseModal();
  };

  if (isLoading) {
    return (
      <SMainBlock>
        <SLoadingContent>
          <SLoadingText>Задачи загружаются...</SLoadingText>
        </SLoadingContent>
      </SMainBlock>
    );
  }

  return (
    <SMainBlock>
      {error && (
        <SError>
          {error}
        </SError>
      )}
      
      <SMainContent>
        {statuses.map((status, i) => (
          <Column 
            key={i} 
            title={status} 
            onCardClick={handleCardClick}
          />
        ))}
      </SMainContent>

      <TaskModal
        taskId={selectedTaskId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteTask}
      />
    </SMainBlock>
  );
}

export default MainPage;
import Column from "../../components/Column/Column.jsx";
import { useState, useEffect } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { 
  SMainBlock,
  SMainContent,
  SLoadingContent,
  SLoadingText,
  SError
} from "./MainPage.styled";

function MainPage() {
  const [localLoading, setLocalLoading] = useState(true);
  const [localError, setLocalError] = useState('');
  
  const { 
    tasks, 
    error, 
    loadTasks 
  } = useTasks();

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLocalLoading(true);
        setLocalError('');
        await loadTasks();
      } catch (error) {
        setLocalError(error.message);
      } finally {
        setLocalLoading(false);
      }
    };

    initializeData();
  }, []);

  const columns = statuses.map(status => ({
    title: status,
    cards: Array.isArray(tasks) ? tasks.filter(task => task.status === status) : []
  }));

  if (localLoading) {
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
      {(error || localError) && (
        <SError>
          {error || localError}
        </SError>
      )}
      
      <SMainContent>
        {columns.map((column, index) => (
          <Column
            key={index}
            title={column.title}
            cards={column.cards}
          />
        ))}
      </SMainContent>
    </SMainBlock>
  );
}

export default MainPage;
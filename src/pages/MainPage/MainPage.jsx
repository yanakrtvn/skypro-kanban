import Column from "../../components/Column/Column.jsx";
import { useEffect } from "react";
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
    if (tasks.length === 0 && !isLoading) {
      loadTasks();
    }
  }, [tasks.length, isLoading, loadTasks]);

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
          <Column key={i} title={status} />
        ))}
      </SMainContent>
    </SMainBlock>
  );
}

export default MainPage;
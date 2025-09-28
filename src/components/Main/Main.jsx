import Column from "../../components/Column/Column.jsx";
import { useState, useEffect } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { SMain, SMainBlock, SMainContent, SLoadingContent, SLoadingText } from "./Main.styled.js";

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const { loadTasks } = useTasks();

  useEffect(() => {
    const initializeData = async () => {
      await loadTasks();
      setIsLoading(false);
    };

    initializeData();
  }, [loadTasks]);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  if (isLoading) {
    return (
      <SMain>
        <div className="container">
          <SMainBlock>
            <SLoadingContent>
              <SLoadingText>Данные загружаются...</SLoadingText>
            </SLoadingContent>
          </SMainBlock>
        </div>
      </SMain>
    );
  }

  return (
    <SMain>
      <div className="container">
        <SMainBlock>
          <SMainContent>
            {statuses.map((status, i) => (
              <Column key={i} title={status} />
            ))}
          </SMainContent>
        </SMainBlock>
      </div>
    </SMain>
  );
}

export default Main;
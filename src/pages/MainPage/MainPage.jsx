import Column from "../../components/Column/Column.jsx";
import Header from "../../components/Header/Header.jsx";
import { useState, useEffect, useCallback } from "react"; // Добавили useCallback
import { kanbanAPI } from "../../services/api.js";
import { 
  SMain,
  SMainBlock,
  SMainContent,
  SLoadingContent,
  SLoadingText,
  SError
} from "./MainPage.styled";

function MainPage({ userData, token }) {
  const [isLoading, setIsLoading] = useState(true);
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState('');

  // Обернули loadTasks в useCallback
  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');

      const authToken = token || localStorage.getItem('token');
      
      if (!authToken) {
        throw new Error('Токен авторизации не найден');
      }

      const tasks = await kanbanAPI.fetchTasks({ token: authToken });

      const statuses = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
      ];

      const groupedColumns = statuses.map(status => ({
        title: status,
        cards: Array.isArray(tasks) ? tasks.filter(task => task.status === status) : []
      }));

      setColumns(groupedColumns);
    } catch (error) {
      setError(error.message);
      console.error('Ошибка загрузки задач:', error);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const updateTaskStatus = async (taskId, newStatus) => {
    try {
      const allTasks = columns.flatMap(column => column.cards);
      const taskToUpdate = allTasks.find(task => task._id === taskId);
      
      if (!taskToUpdate) return;

      const authToken = token || localStorage.getItem('token');
      
      await kanbanAPI.editTask({
        id: taskId,
        token: authToken,
        task: {
          userId: taskToUpdate.userId || userData?.id,
          title: taskToUpdate.title,
          status: newStatus,
          description: taskToUpdate.description || "",
          date: taskToUpdate.date
        }
      });

      await loadTasks();
    } catch (error) {
      setError(error.message);
      console.error('Ошибка обновления задачи:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const authToken = token || localStorage.getItem('token');
      
      await kanbanAPI.deleteTask({
        id: taskId,
        token: authToken
      });
      
      await loadTasks();
    } catch (error) {
      setError(error.message);
      console.error('Ошибка удаления задачи:', error);
    }
  };
  
  if (isLoading) {
    return (
      <>
        <Header userData={userData}/>
        <SMain>
          <div className="container">
            <SMainBlock>
              <SLoadingContent>
                <SLoadingText>Данные загружаются...</SLoadingText>
              </SLoadingContent>
            </SMainBlock>
          </div>
        </SMain>
      </>
    );
  }

  return (
    <>
      <Header userData={userData}/>
      <SMain>
        <div className="container">
          <SMainBlock>
            {error && <SError>{error}</SError>}
            <SMainContent>
              {columns.map((column, index) => (
                <Column
                  key={index}
                  title={column.title}
                  cards={column.cards}
                  onTaskUpdate={updateTaskStatus}
                  onTaskDelete={deleteTask}
                />
              ))}
            </SMainContent>
          </SMainBlock>
        </div>
      </SMain>
    </>
  );
}

export default MainPage;
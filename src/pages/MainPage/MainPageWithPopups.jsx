import { useState, useEffect } from "react";
import { useTasks } from "../../contexts/TaskContext";
import { useAuth } from "../../contexts/AuthContext";
import Column from "../../components/Column/Column.jsx";
import Header from "../../components/Header/Header.jsx";
import PopNewCard from "../../components/PopNewCard/PopNewCard.jsx";
import PopBrowse from "../../components/PopBrowse/PopBrowse.jsx";
import PopExit from "../../components/PopExit/PopExit.jsx";
import { 
  SMainBlock,
  SMainContent,
  SLoadingContent,
  SLoadingText,
  SError,
  SEmptyState,
  SEmptyIcon,
  SEmptyTitle,
  SEmptyText
} from "./MainPage.styled";
import styled from 'styled-components';

const SMain = styled.main`
  flex-direction: column;
  flex: 1 1 auto;
`;

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

function MainPageWithPopups() {
  const { 
    tasks,
    isLoading, 
    error, 
    loadTasks 
  } = useTasks();
  
  const { logout } = useAuth();
  
  const [activePopup, setActivePopup] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе", 
    "Тестирование",
    "Готово",
  ];

  useEffect(() => {
    const loadTasksOnEnter = async () => {
      try {
        await loadTasks(true);
      } catch (error) {
        console.error('Ошибка загрузки задач:', error);
      }
    };

    loadTasksOnEnter();
  }, []);

  const hasTasks = tasks && tasks.length > 0;

  const handleOpenNewCard = () => {
    setActivePopup('new');
  };

  const handleOpenTask = (taskId) => {
    setSelectedTaskId(taskId);
    setActivePopup('browse');
  };

  const handleOpenExit = () => {
    setActivePopup('exit');
  };

  const handleClosePopup = () => {
    setActivePopup(null);
    setSelectedTaskId(null);
  };

  const handleConfirmExit = () => {
    logout();
    handleClosePopup();
  };

  if (isLoading) {
    return (
      <SMain>
        <Container>
          <SMainBlock>
            <SLoadingContent>
              <SLoadingText>Задачи загружаются...</SLoadingText>
            </SLoadingContent>
          </SMainBlock>
        </Container>
      </SMain>
    );
  }

  return (
    <>
      <Header 
        onNewCardClick={handleOpenNewCard}
        onExitClick={handleOpenExit}
      />
      
      <SMain>
        <Container>
          <SMainBlock>
            {error && (
              <SError>
                {error}
              </SError>
            )}
            
            {!error && !hasTasks && (
              <SEmptyState>
                <SEmptyIcon>📝</SEmptyIcon>
                <SEmptyTitle>Задач пока нет</SEmptyTitle>
                <SEmptyText>
                  Создайте первую задачу, чтобы начать работу над проектом
                </SEmptyText>
              </SEmptyState>
            )}
            
            {hasTasks && (
              <SMainContent>
                {statuses.map((status, i) => (
                  <Column 
                    key={i} 
                    title={status} 
                    onCardClick={handleOpenTask}
                  />
                ))}
              </SMainContent>
            )}
          </SMainBlock>
        </Container>
      </SMain>

      {/* Попап создания новой задачи */}
      <PopNewCard 
        $isOpen={activePopup === 'new'}
        onClose={handleClosePopup}
      />
      
      {/* Попап просмотра/редактирования задачи */}
      <PopBrowse 
        $isOpen={activePopup === 'browse'}
        onClose={handleClosePopup}
        taskId={selectedTaskId}
      />
      
      {/* Попап выхода */}
      <PopExit 
        $isOpen={activePopup === 'exit'}
        onClose={handleClosePopup}
        onConfirm={handleConfirmExit}
      />
    </>
  );
}

export default MainPageWithPopups;
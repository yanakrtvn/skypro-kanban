import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../../contexts/TaskContext";
import { useAuth } from "../../contexts/AuthContext";
import Header from "../../components/Header/Header.jsx";
import PopBrowse from "../../components/PopBrowse/PopBrowse.jsx";
import PopExit from "../../components/PopExit/PopExit.jsx";
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #F1F1F1;
`;

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

const SMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 20px 0;
`;

function CardPageWithPopup() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById } = useTasks();
  const { logout } = useAuth();
  
  const [activePopup, setActivePopup] = useState('browse');
  const [selectedTaskId, setSelectedTaskId] = useState(id);

  const task = getTaskById(id);

  useEffect(() => {
    setSelectedTaskId(id);
  }, [id]);

  const handleOpenExit = () => {
    setActivePopup('exit');
  };

  const handleClosePopup = () => {
    navigate('/');
  };

  const handleConfirmExit = () => {
    logout();
    navigate('/login');
  };

  if (!task) {
    return (
      <PageContainer>
        <Header onExitClick={handleOpenExit} />
        <SMain>
          <Container>
            <SMainBlock>
              <div>Задача не найдена</div>
            </SMainBlock>
          </Container>
        </SMain>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header 
        onNewCardClick={() => navigate('/')}
        onExitClick={handleOpenExit}
      />
      
      <SMain>
        <Container>
          <SMainBlock>
            <div style={{ textAlign: 'center', padding: '50px 0', color: '#94A6BE' }}>
              Открыта задача: {task.title}
            </div>
          </SMainBlock>
        </Container>
      </SMain>

      <PopBrowse 
        $isOpen={activePopup === 'browse'}
        onClose={handleClosePopup}
        taskId={selectedTaskId}
      />
      
      <PopExit 
        $isOpen={activePopup === 'exit'}
        onClose={() => setActivePopup('browse')}
        onConfirm={handleConfirmExit}
      />
    </PageContainer>
  );
}

export default CardPageWithPopup;
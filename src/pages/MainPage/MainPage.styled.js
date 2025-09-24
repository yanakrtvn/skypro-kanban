import styled from 'styled-components';

export const SMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const SMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const SMainContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 0;
`;

export const SLoadingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const SLoadingText = styled.p`
  font-size: 18px;
  color: #94A6BE;
`;
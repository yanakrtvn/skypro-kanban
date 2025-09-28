import styled from 'styled-components';

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

export const SError = styled.div`
    color: #ff0000;
    background-color: #ffe6e6;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ff0000;
`;
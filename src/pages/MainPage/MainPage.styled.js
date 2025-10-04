import styled from 'styled-components';

export const SMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 20px 0;
`;

export const SMainContent = styled.div`
  display: flex;
  gap: 26px;
  width: 100%;
  
  @media screen and (min-width: 1025px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;
    
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #a8a8a8;
    }
  }
  
  @media screen and (max-width: 1024px) and (min-width: 769px) {
    display: grid;
    grid-auto-rows: auto;
    gap: 20px;
    
    & > * {
      width: 100%;
      max-width: 320px;
    }
    
    & > *:nth-child(1) { grid-column: 1; grid-row: 1; }
    & > *:nth-child(2) { grid-column: 2; grid-row: 1; }
    & > *:nth-child(3) { grid-column: 1; grid-row: 2; }
    & > *:nth-child(4) { grid-column: 2; grid-row: 2; }
    
    & > *:nth-child(5) {
      grid-column: 1 / -1;
      grid-row: 3;
      width: 320px;
      justify-self: start;
    }
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;

export const SLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const SLoadingText = styled.p`
  font-size: 18px;
  color: #94A6BE;
  text-align: center;
`;

export const SError = styled.div`
  background-color: #ffe6e6;
  border: 1px solid #ff4444;
  color: #cc0000;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  color: #666;
`;

export const SEmptyIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

export const SEmptyTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
`;

export const SEmptyText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  max-width: 400px;
  line-height: 1.5;
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SCardPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.backgroundColor || "#EAEEF6"};
  padding: 40px 0;
`;

export const SCardPageContainer = styled.div`
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const SCardPageBackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: #94A6BE;
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #565EEF;
  }
`;

export const SCardPageContent = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  padding: 30px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const SCardPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SCardPageTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  flex: 1;
`;

export const SCardPageTheme = styled.div`
  padding: 8px 20px;
  border-radius: 24px;
  background: ${props => {
    switch(props.$themecolor) {
      case 'Web Design': return 'rgba(255, 149, 92, 0.12)';
      case 'Research': return 'rgba(131, 196, 65, 0.12)';
      case 'Copywriting': return 'rgba(120, 120, 224, 0.12)';
      default: return 'rgba(148, 166, 190, 0.12)';
    }
  }};
  
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    color: ${props => {
      switch(props.$themecolor) {
        case 'Web Design': return '#FF955C';
        case 'Research': return '#83C441';
        case 'Copywriting': return '#7878E2';
        default: return '#94A6BE';
      }
    }};
  }
`;

export const SCardPageInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  padding: 20px;
  background: #EAEEF6;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .label {
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  .value {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: -0.16px;
  }
`;

export const SCardPageDescription = styled.div`
  margin-bottom: 30px;

  h3 {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
  }

  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin: 0;
    padding: 14px;
    background: #EAEEF6;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
  }
`;

export const SCardPageActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const SCardPageButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &._btn-bg {
    background: #565EEF;
    color: #FFFFFF;

    &:hover {
      background: #3a42e0;
    }
  }

  &._btn-bor {
    background: transparent;
    border: 0.7px solid #565EEF;
    color: #565EEF;

    &:hover {
      background: rgba(86, 94, 239, 0.1);
    }
  }

  &._hover01:hover {
    background: #3a42e0;
  }

  &._hover03:hover {
    background: rgba(86, 94, 239, 0.1);
  }
`;
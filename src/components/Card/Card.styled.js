import styled from "styled-components";

const themeColorsBG = {
  "Web Design": "#FFE4C2",
  Research: "#B4FDD1",
  Copywriting: "#E9D4FF",
};
const themeColorsText = {
  "Web Design": "#FF6D00",
  Research: "#06B16E",
  Copywriting: "#9A48F1",
};

export const SCardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const SCardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const SCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) => themeColorsBG[props.$themecolor] || "#FFE4C2"};

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) => themeColorsText[props.$themecolor] || "#FF6D00"};
  }
`;

export const SCardButton = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const SCardBtn = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const SCardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 10px;
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 36px;
  min-height: 18px;
`;

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const SCardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SDateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;

export const SCardDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const SCardDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 120px;
  margin-top: 5px;
`;

export const SCardDropdownItem = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
  color: #333;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &.delete {
    color: #ff0000;
    
    &:hover {
      background-color: #ffe6e6;
    }
  }
`;

export const SDropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 150px;
  padding: 8px 0;
`;

export const SDropdownItem = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &.delete {
    color: #ff4444;

    &:hover {
      background-color: #ffe6e6;
    }
  }
`;
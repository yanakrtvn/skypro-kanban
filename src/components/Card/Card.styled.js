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
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const SCardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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

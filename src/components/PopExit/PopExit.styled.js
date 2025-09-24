import styled from "styled-components";

export const SPopExit = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &.active {
    display: block;
  }
`;

export const SPopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

export const SPopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const SPopExitTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const SPopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SPopExitButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const SPopExitYes = styled(SPopExitButton)`
  background-color: #565EEF;
  color: #FFFFFF;
  margin-right: 10px;

  &:hover {
    background-color: #4248d4;
  }
`;

export const SPopExitNo = styled(SPopExitButton)`
  background-color: transparent;
  border: 0.7px solid #565EEF;
  color: #565EEF;

  &:hover {
    background-color: #565EEF;
    color: #FFFFFF;
  }
`;
import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
  padding: 11px 0;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const SHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 85px;
    height: auto;
  }
  
  &._dark {
    display: none;
  }
`;

export const SHeaderNav = styled.nav`
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  position: relative;
`;

export const SHeaderButton = styled.div`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  
  a {
    color: #FFFFFF;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  
  &._hover01:hover {
    background-color: #333BC9;
  }
`;

export const SHeaderUser = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  cursor: pointer;
  padding: 0 12px;
  border-radius: 24px;
  border: 1px solid ${props => props.$active ? '#565EEF' : 'transparent'};
  background: ${props => props.$active ? '#F0F2FF' : 'transparent'};
  transition: all 0.3s ease;
  max-width: 200px;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  &:hover {
    background: #F0F2FF;
    border-color: #565EEF;
  }
`;

export const SHeaderUserMenu = styled.div`
  display: ${props => props.$visible ? 'flex' : 'none'};
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px; 
  background: rgba(255, 255, 255, 1);
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 10px;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 24px 20px;
  z-index: 1001;
  animation: fadeIn 0.3s ease;
  box-sizing: border-box;
  width: 213px;
  min-height: 205px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SUserMenuName = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  max-height: 42px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SUserMenuEmail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  max-height: 42px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SUserMenuTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
  
  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin: 0;
    text-align: center;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    flex: 1;
    padding-right: 10px;
  }
  
  input[type=checkbox] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    flex-shrink: 0;
  }
  
  input[type=checkbox]::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94A6BE;
    transition: 0.5s;
  }
  
  input:checked[type=checkbox]::before {
    left: 12px;
  }
`;

export const SUserMenuButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  a {
    color: rgba(86, 94, 239, 1);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 10px;
    letter-spacing: 0%;
    text-align: center;
  }
  
  &:hover {
    background: #565EEF;
    
    a {
      color: #FFFFFF;
    }
  }
`;

export const ThemeSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  flex-shrink: 0;
  
  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .theme-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #EAEEF6;
    transition: .4s;
    border-radius: 24px;
    
    &::before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: #94A6BE;
      transition: .4s;
      border-radius: 50%;
    }
  }
  
  .checkbox:checked + .theme-slider {
    background-color: #565EEF;
  }
  
  .checkbox:checked + .theme-slider::before {
    transform: translateX(20px);
    background-color: #FFFFFF;
  }
`;
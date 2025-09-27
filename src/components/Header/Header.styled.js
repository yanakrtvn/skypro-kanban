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
  justify-content: space-between;
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
  
  &:hover {
    background: #F0F2FF;
    border-color: #565EEF;
  }
`;

export const SHeaderUserMenu = styled.div`
  display: ${props => props.$visible ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: #FFFFFF;
  border: 0.7px solid #D4DBE5;
  border-radius: 8px;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 24px;
  min-width: 250px;
  z-index: 1001;
  animation: fadeIn 0.3s ease;

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

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 20px;
    width: 12px;
    height: 12px;
    background: #FFFFFF;
    border-top: 0.7px solid #D4DBE5;
    border-left: 0.7px solid #D4DBE5;
    transform: rotate(45deg);
  }
`;

export const SUserMenuName = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 4px;
`;

export const SUserMenuEmail = styled.p`
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #EAEEF6;
`;

export const SUserMenuTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  
  p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
  }
`;

export const SUserMenuButton = styled.button`
  width: 100%;
  height: 36px;
  background: transparent;
  color: #565EEF;
  border-radius: 6px;
  border: 1px solid #565EEF;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  a {
    color: #565EEF;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
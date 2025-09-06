import styled from 'styled-components';

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const SHeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const SHeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const SHeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SHeaderButton = styled.button`
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
  }
  
  &:hover {
    background-color: #33399b;
  }
`;

export const SHeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
  position: relative;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565EEF;
    border-bottom: 1.9px solid #565EEF;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
  
  &:hover {
    color: #33399b;
    
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const SHeaderUserMenu = styled.div`
  display: ${props => props.$visible ? 'block' : 'none'};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;
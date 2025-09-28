import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: #F1F1F1;
`;

const SMain = styled.main`
    flex-direction: column;
    flex: 1 1 auto;
`;

const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <SMain>
        <Container>
          <Outlet />
        </Container>
      </SMain>
    </LayoutWrapper>
  );
};

export default Layout;
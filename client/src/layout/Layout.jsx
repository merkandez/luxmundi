import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/design/Header'; // Componente personalizado de Header
import Footer from '../components/design/Footer'; // Componente personalizado de Footer
import useAuth from '../hooks/useAuth';
import styled from 'styled-components';

const Layout = () => {
  const { isAuthenticated, role, logout } = useAuth();

  return (
    <MainContainer>
      <Header isAuthenticated={isAuthenticated} role={role} logout={logout} />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f9;
`;

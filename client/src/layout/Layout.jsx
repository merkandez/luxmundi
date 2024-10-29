// src/layout/Layout.jsx
import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';

const Layout = () => {
  const { isAuthenticated, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Manejo de logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <MainContainer>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          {isAuthenticated ? (
            <>
              <StyledLink to="/profile">Profile</StyledLink>
              {role === 'admin' && <StyledLink to="/admin-only">Admin Area</StyledLink>}
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </>
          ) : (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </>
          )}
          <StyledLink to="/aboutus">About Us</StyledLink>
        </Nav>
      </Header>
      <Content>
        <Outlet /> {/* Renderiza el componente correspondiente a la ruta */}
      </Content>
    </MainContainer>
  );
};

export default Layout;

// Estilos con styled-components
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #333;
  padding: 1rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f4f4f9;
`;

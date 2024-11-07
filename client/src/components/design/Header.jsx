// src/components/design/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({
  isAuthenticated,
  role,
  logout,
  openLoginModal,
  openRegisterModal,
}) => (
  <HeaderContainer>
    <NavSection>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/aboutus'>About Us</StyledLink>
      {isAuthenticated ? (
        <>
          <StyledLink to='/profile'>Profile</StyledLink>
          {role === 'admin' && <StyledLink to='/admin'>Admin Area</StyledLink>}
          <LogoutButton onClick={logout}>Logout</LogoutButton>
        </>
      ) : (
        <AuthButtonsContainer>
          <Button onClick={openLoginModal}>Login</Button>
          <Button onClick={openRegisterModal}>Register</Button>
        </AuthButtonsContainer>
      )}
    </NavSection>
  </HeaderContainer>
);

export default Header;

// Estilos para los componentes
const HeaderContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
`;

const NavSection = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AuthButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #007bff; // Color del botón
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #0056b3; // Color al pasar el cursor
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

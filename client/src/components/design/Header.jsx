// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ isAuthenticated, role, logout }) => (
  <HeaderContainer>
    <StyledLink to="/">Home</StyledLink>
    {isAuthenticated ? (
      <>
        <StyledLink to="/profile">Profile</StyledLink>
        {role === 'admin' && <StyledLink to="/admin">Admin Area</StyledLink>}
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </>
    ) : (
      <>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </>
    )}
    <StyledLink to="/aboutus">About Us</StyledLink>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
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

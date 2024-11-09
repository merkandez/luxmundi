import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Camera } from "lucide-react";

const Header = ({
  isAuthenticated,
  role,
  logout,
  openLoginModal,
  openRegisterModal,
}) => (
  <HeaderContainer>
    <Wrapper>
      <LogoSection>
        <Camera size={24} />
        <span>LUX MUNDI</span>
      </LogoSection>

      <Nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to='/profile'>Profile</NavLink>
            {role === 'admin' && <NavLink to='/admin'>Admin Area</NavLink>}
          </>
        ) : null}
      </Nav>

      {isAuthenticated ? (
        <AuthButtons>
          <button onClick={logout}>Logout</button>
        </AuthButtons>
      ) : (
        <AuthButtons>
          <button onClick={openLoginModal}>Log in</button>
          <button className="register" onClick={openRegisterModal}>Register</button>
        </AuthButtons>
      )}
    </Wrapper>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  border-bottom: 2px solid #444;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #29c9a9;
    transform: scale(1.2);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 640px) {
    display: none;
  }

  button {
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      color: #ccc;
    }
  }

  .register {
    background-color: #fff;
    color: #000;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
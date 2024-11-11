import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AvatarIcon from '../design/AvatarIcon';

const Header = ({
  isAuthenticated,
  role,
  logout,
  openLoginModal,
  openRegisterModal,
  avatarUrl,
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/aboutus">About Us</StyledLink>
        </LogoSection>

        <Nav>
          {isAuthenticated ? (
            <>
              {role === 'admin' && <StyledLink to="/admin">Admin Area</StyledLink>}

              <ProfileContainer>
                {avatarUrl ? (
                  <AvatarImage onClick={toggleMenu} src={avatarUrl} alt="Avatar" />
                ) : (
                  <AvatarIconWrapper onClick={toggleMenu}>
                    <AvatarIcon />
                  </AvatarIconWrapper>
                )}
                {menuVisible && (
                  <ProfileMenu ref={menuRef}>
                    <StyledLink to="/profile">Edit Profile</StyledLink>
                    <LogoutButton onClick={logout}>Logout</LogoutButton>
                  </ProfileMenu>
                )}
              </ProfileContainer>
            </>
          ) : (
            <AuthButtons>
              <Button onClick={openLoginModal}>Login</Button>
              <Button onClick={openRegisterModal}>Register</Button>
            </AuthButtons>
          )}
        </Nav>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;

// Estilos
const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
  padding: 0 1rem;
  border-bottom: 2px solid #444;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    color: #29c9a9;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProfileContainer = styled.div`
  margin-left: auto;
  position: relative;
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const AvatarIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #444;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;

  & a,
  & button {
    padding: 10px;
    color: white;
    text-decoration: none;
    text-align: left;
    width: 100%;
    &:hover {
      background-color: #555;
    }
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

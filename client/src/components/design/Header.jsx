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
      <NavSection>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/aboutus">About Us</StyledLink>
        
        {isAuthenticated ? (
          <>
            {role === 'admin' && <StyledLink to="/admin">Admin Area</StyledLink>}

            <ProfileContainer>
              {/* Si avatarUrl está disponible, mostramos la imagen; de lo contrario, mostramos el AvatarIcon */}
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
          <AuthButtonsContainer>
            <Button onClick={openLoginModal}>Login</Button>
            <Button onClick={openRegisterModal}>Register</Button>
          </AuthButtonsContainer>
        )}
      </NavSection>
    </HeaderContainer>
  );
};

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

const LogoutButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
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

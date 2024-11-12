import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Importaciones necesarias
import AvatarIcon from './AvatarIcon';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import ModalForm from '../auth/ModalForm';
import { Button} from '../../styles/components';
import { theme } from '../../styles/theme';
import { BsCameraFill } from 'react-icons/bs';
import { Search } from 'lucide-react';
import ContactModal from '../ContactModal';

const Header = ({ isAuthenticated, role, logout, avatarUrl }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const openLoginForm = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const openRegisterForm = () => {
    setShowRegisterForm(true);
    setShowLoginForm(false);
  };

  const closeForms = () => {
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  const scrollToDestinos = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Lógica para desplazarse al inicio al hacer clic en el logo
  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection onClick={handleLogoClick}>
          <BsCameraFill size={24} color={theme.colors.primary} />
          <span>LUX MUNDI</span>
        </LogoSection>

        <Nav>
          <NavLink to="/about">Nosotros</NavLink>
          <NavButton onClick={() => setShowContactModal(true)}>Contacto</NavButton>
          <NavButton onClick={scrollToDestinos}>Destinos</NavButton> {/* Enlace a Destinos */}
          {role === 'admin' && <NavLink to="/admin">Admin. Area</NavLink>}
        </Nav>

        <RightSection>
          <SearchSection>
            <SearchInput placeholder="Search..." />
            <SearchButton>
              <Search size={20} />
            </SearchButton>
          </SearchSection>

          {isAuthenticated ? (
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
                  <NavLink to="/profile">Edit Profile</NavLink>
                  <LogoutButton onClick={logout}>Logout</LogoutButton>
                </ProfileMenu>
              )}
            </ProfileContainer>
          ) : (
            <AuthButtons>
              <Button variant="primary" onClick={openLoginForm}>Login</Button>
              <Button variant="secondary" onClick={openRegisterForm}>Register</Button>
            </AuthButtons>
          )}
        </RightSection>
      </Wrapper>

      {/* Modals */}
      {showLoginForm && (
        <ModalForm onClose={closeForms}>
          <LoginForm onClose={closeForms} onSwitchToRegister={openRegisterForm} />
        </ModalForm>
      )}
      {showRegisterForm && (
        <ModalForm onClose={closeForms}>
          <RegisterForm onClose={closeForms} onSwitchToLogin={openLoginForm} />
        </ModalForm>
      )}
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </HeaderContainer>
  );
};

export default Header;
// Estilos
const HeaderContainer = styled.header`
  background-color: ${theme.colors.background};
  color: ${theme.colors.text.primary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  padding: 0 1rem;
  border-bottom: 2px solid ${theme.colors.border};
`;

const Wrapper = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  position: relative;
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.6rem 1rem;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const NavButton = styled.button`
  color: ${theme.colors.text.primary};
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 0.5rem;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  color: ${theme.colors.text.primary};
  background-color: ${theme.colors.background};
  transition: ${theme.animation.transition};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${theme.colors.surface};
  border-radius: 5px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const LogoutButton = styled(Button)`
  background: transparent;
  color: ${theme.colors.text.primary};
  padding: 0.5rem;
  text-align: left;
`;

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AvatarIcon from './AvatarIcon';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import ModalForm from '../auth/ModalForm';
import EditProfileCard from '../EditProfileCard';  
import { Button } from '../../styles/components';
import { theme } from '../../styles/theme';
import { BsCameraFill } from 'react-icons/bs';
import { Search, X, Menu } from 'lucide-react';
import ContactModal from '../ContactModal';

const Header = ({ isAuthenticated, role, logout, avatarUrl, userData }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false); // Estado para el modal de edición
  const [showContactModal, setShowContactModal] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setShowEditProfile(false);  // Cierra el modal de edición
  };

  const scrollToDestinos = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      document.getElementById('explore-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Cierra el menú móvil si el ancho de la ventana cambia a tamaño de escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

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
          <NavButton onClick={scrollToDestinos}>Destinos</NavButton>
        </Nav>

        <RightSection>
          <SearchSection>
            <SearchBar className={isSearchOpen ? 'active' : ''}>
              <SearchInput placeholder="Search..." autoFocus={isSearchOpen} />
              <X
                size={16}
                color="#666"
                onClick={() => setIsSearchOpen(false)}
                style={{ cursor: 'pointer' }}
              />
            </SearchBar>
            <SearchButton onClick={() => setIsSearchOpen(!isSearchOpen)}>
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
                  <NavButton as="button" onClick={() => setShowEditProfile(true)}>
                    Edit Profile
                  </NavButton>
                  {role === 'admin' && <NavLink to="/admin">Admin Area</NavLink>}
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

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </RightSection>

        <MobileMenu isOpen={isMenuOpen}>
          <MobileNavLink to="/about">Nosotros</MobileNavLink>
          <MobileNavLink as="button" onClick={() => setShowContactModal(true)}>Contacto</MobileNavLink>
          <MobileNavLink as="button" onClick={scrollToDestinos}>Destinos</MobileNavLink>
        </MobileMenu>
      </Wrapper>

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
      {showEditProfile && (
        <ModalForm onClose={closeForms}>
          <EditProfileCard
            initialData={userData}
            onSave={(updatedData) => {
              // Logica de guardado del perfil
              console.log("Perfil actualizado", updatedData);
              closeForms();
            }}
            onCancel={closeForms}
          />
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

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${theme.colors.text.primary};
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-size: 1rem;
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

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  padding: 0.5rem;
  background-color: ${theme.colors.background};
  width: ${({ isOpen }) => (isOpen ? '200px' : '0')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: all 0.3s ease;
  overflow: hidden;

  &.active {
    width: 200px;
    opacity: 1;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  color: ${theme.colors.text.primary};
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfileContainer = styled.div`
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
  background-color: ${theme.colors.background};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
`;

const LogoutButton = styled(Button)`
  background: transparent;
  color: ${theme.colors.text.primary};
  padding: 0.5rem;
  text-align: left;
  border: none;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 5rem;
  right: 0;
  width: 60%;
  max-width: 300px;
  background-color: ${theme.colors.background};
  border-left: 1px solid ${theme.colors.border};
  padding: 1rem;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  text-align: right;
  background-color: ${theme.colors.background};
  border: none;
  &:hover {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.text.primary};
  }
`;

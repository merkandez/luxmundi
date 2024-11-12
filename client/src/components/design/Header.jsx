import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import ModalForm from "../auth/ModalForm";
import { Button } from "../../styles/components";
import { theme } from "../../styles/theme";
import { BsCameraFill } from "react-icons/bs";
import { Search, X, Menu, User, Settings, LogOut, Info, Map, Mail } from "lucide-react";
import ContactModal from "../ContactModal";
import EditProfileCard from "../EditProfileCard";

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
    if (menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

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
    setShowEditProfile(false); // Cierra el modal de edición
  };

  const scrollToDestinos = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.getElementById("explore-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Cierra el menú móvil si el ancho de la ventana cambia a tamaño de escritorio
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection onClick={handleLogoClick}>
          <LogoIcon>
            <BsCameraFill size={20} />
          </LogoIcon>
          <LogoText>LUX MUNDI</LogoText>
        </LogoSection>

        <Nav>
          <NavLink to="/about">Nosotros</NavLink>
          <NavLink as="button" onClick={scrollToDestinos}>
            Destinos
          </NavLink>
          <NavLink as="button" onClick={() => setShowContactModal(true)}>
            Contacto
          </NavLink>
        </Nav>

        <RightSection>
          <SearchSection>
            <SearchBar isOpen={isSearchOpen}>
              <SearchInput placeholder="Buscar..." autoFocus={isSearchOpen} />
              <SearchButton onClick={() => setIsSearchOpen(false)}>
                <X size={14} />
              </SearchButton>
            </SearchBar>
            <SearchToggle onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search size={20} />
            </SearchToggle>
          </SearchSection>

          {isAuthenticated ? (
            <ProfileContainer className="desktop-only">
              {avatarUrl ? (
                <AvatarImage src={avatarUrl} alt="Avatar" onClick={toggleMenu} />
              ) : (
                <AvatarIconWrapper onClick={toggleMenu}>
                  <User size={20} />
                </AvatarIconWrapper>
              )}
              {menuVisible && (
                <ProfileMenu ref={menuRef}>
                  <MenuLink as="button" onClick={() => setShowEditProfile(true)}>
                    <User size={18} />
                    Mi Perfil
                  </MenuLink>
                  {role === "admin" && (
                    <MenuLink to="/admin" onClick={toggleMenu}>
                      <Settings size={18} />
                      Panel Admin
                    </MenuLink>
                  )}
                  <MenuDivider />
                  <LogoutButton onClick={() => { logout(); toggleMenu(); }}>
                    <LogOut size={18} />
                    Cerrar Sesión
                  </LogoutButton>
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
          <MobileMenuWrapper>
            <MobileNavLink to="/about">
              <Info size={16} />
              Nosotros
            </MobileNavLink>
            <MobileNavLink as="button" onClick={scrollToDestinos}>
              <Map size={16} />
              Destinos
            </MobileNavLink>
            <MobileNavLink as="button" onClick={() => setShowContactModal(true)}>
              <Mail size={16} />
              Contacto
            </MobileNavLink>
          </MobileMenuWrapper>
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
          <EditProfileCard initialData={userData} onSave={(updatedData) => {
            console.log("Perfil actualizado", updatedData);
            closeForms();
          }} onCancel={closeForms} />
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
  border-bottom: 1px solid ${theme.colors.border};
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
  gap: 0.5rem;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:hover {
    color: ${theme.colors.primary};
    transform: scale(1.05);
  }
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  transition: ${theme.animation.transition};

  ${LogoSection}:hover & {
    color: ${theme.colors.primary};
  }
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  transition: ${theme.animation.transition};

  ${LogoSection}:hover & {
    color: ${theme.colors.primary};
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 1.4rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.6rem 1rem;
  transition: ${theme.animation.transition};
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${theme.colors.primary};
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  &:hover {
    color: ${theme.colors.primary};
    opacity: 0.9;
  }

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 0.95rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1rem;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 0.5rem;
`;

const SearchBar = styled.div`
  position: absolute;
  right: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.primary};
  border-radius: 20px;
  background-color: ${theme.colors.background};
  overflow: hidden;
  width: ${({ isOpen }) => (isOpen ? "140px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-right: 0.5rem;

  @media (min-width: ${theme.breakpoints.tablet}) {
    width: ${({ isOpen }) => (isOpen ? "180px" : "0")};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: ${({ isOpen }) => (isOpen ? "220px" : "0")};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.4rem 0.8rem;
  border: none;
  color: ${theme.colors.text.primary};
  background-color: transparent;
  font-size: 0.9rem;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  cursor: pointer;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchToggle = styled(SearchButton)`
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  transition: ${theme.animation.transition};

  &:hover {
    background-color: ${theme.colors.background};
  }

  svg {
    color: ${theme.colors.background};
    transition: ${theme.animation.transition};
  }

  &:hover svg {
    color: ${theme.colors.primary};
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfileContainer = styled.div`
  position: relative;

  &.desktop-only {
    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }
  }
`;

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

const AvatarIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${theme.animation.transition};
  background-color: ${theme.colors.primary};
  border-radius: 50%;

  &:hover {
    background-color: ${theme.colors.background};
  }

  svg {
    color: ${theme.colors.background};
    transition: ${theme.animation.transition};
  }

  &:hover svg {
    color: ${theme.colors.primary};
  }
`;

const ProfileMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background-color: ${theme.colors.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  border: 1px solid ${theme.colors.border};
  padding: 0.5rem;
  z-index: 1000;

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-width: 180px;
  }
`;

const MenuLink = styled(NavLink)`
  color: ${theme.colors.text.primary};
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const MenuDivider = styled.div`
  height: 1px;
  background-color: ${theme.colors.border};
  margin: 0.5rem 0;
  opacity: 0.2;
`;

const LogoutButton = styled.button`
  width: 100%;
  color: ${theme.colors.danger};
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  letter-spacing: 0.3px;
  text-align: left;

  &:hover {
    background-color: ${theme.colors.dangerLight};
    color: ${theme.colors.danger};
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    width: 16px;
    height: 16px;
    color: inherit;
  }

  @media (prefers-color-scheme: dark) {
    color: #ff6b6b;

    &:hover {
      background-color: rgba(255, 107, 107, 0.1);
      color: #ff8787;
    }
  }
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
  width: 75%;
  max-width: 240px;
  height: auto;
  background-color: ${theme.colors.background};
  border-left: 1px solid ${theme.colors.border};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 999;
  overflow-y: auto;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px 0 0 12px;
`;

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  gap: 0.3rem;
`;

const MobileNavLink = styled(MenuLink)`
  font-size: 0.9rem;
  padding: 0.8rem;
  justify-content: flex-start;
  color: ${theme.colors.text.primary};

  &:hover {
    background-color: ${theme.colors.primaryLight};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

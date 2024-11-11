import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import AvatarIcon from '../design/AvatarIcon';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';
import ModalForm from '../auth/ModalForm';
import { Search, X, Menu } from 'lucide-react';
import { BsCameraFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated, role, logout, avatarUrl }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

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

  const navLinks = [
    { name: "Nosotros", href: "/about" },
    { name: "Destinos", href: "/#explore" }
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection to="/">
          <BsCameraFill size={24} color="#ffffff" />
          <span>LUX MUNDI</span>
        </LogoSection>

        <Nav>
          {navLinks.map((link) => (
            <StyledLink key={link.name} to={link.href}>
              {link.name}
            </StyledLink>
          ))}
        </Nav>

        <RightSection>
          <SearchSection>
            <SearchBar className={isSearchOpen ? "active" : ""}>
              <SearchInput
                type="text"
                placeholder="Search..."
                autoFocus={isSearchOpen}
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
                  <StyledLink to="/profile">Edit Profile</StyledLink>
                  {role === 'admin' && (
                    <StyledLink to="/admin">Admin Area</StyledLink>
                  )}
                  <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                </ProfileMenu>
              )}
            </ProfileContainer>
          ) : (
            <AuthButtons>
              <Button onClick={openLoginForm}>Login</Button>
              <Button onClick={openRegisterForm}>Register</Button>
            </AuthButtons>
          )}
        </RightSection>

        {/* Mobile menu button */}
        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>

        <MobileMenu isOpen={isMenuOpen}>
          {navLinks.map((link) => (
            <MobileNavLink key={link.name} to={link.href}>
              {link.name}
            </MobileNavLink>
          ))}
          {isAuthenticated ? (
            <>
              <MobileNavLink to="/profile">Profile</MobileNavLink>
              <MobileNavLink as="button" onClick={handleLogout}>
                Logout
              </MobileNavLink>
            </>
          ) : (
            <>
              <MobileNavLink as="button" onClick={openLoginForm}>
                Log in
              </MobileNavLink>
              <MobileNavLink as="button" onClick={openRegisterForm}>
                Register
              </MobileNavLink>
            </>
          )}
        </MobileMenu>
      </Wrapper>

      {/* Modal para LoginForm o RegisterForm */}
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
    </HeaderContainer>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  role: PropTypes.string,
  logout: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string
};

export default Header;

// Estilos para el Header y sus elementos
const HeaderContainer = styled.header`
  background-color: #0a0a0a;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

// Define otros estilos aquí según los elementos que necesitas del diseño de Juliana
// Similar a los estilos proporcionados antes

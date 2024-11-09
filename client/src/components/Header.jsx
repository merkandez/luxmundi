import styled from "styled-components";
import { Camera, Search, X, Menu, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
`;

const Wrapper = styled.div`
  max-width: 1440px;
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
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    color: #29c9a9;
    transform: scale(1.2);
  }
`;

const SearchSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #666;
  border-radius: 4px;
  padding: 4px 8px;
  width: 200px;

  @media (max-width: 768px) {
    width: 160px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 4px;
  border: none;
  color: #fff;
  font-size: 0.9rem;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

const AuthButtons = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    display: flex;
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

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #29c9a9;
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 4rem;
  background-color: #1e1e1e;
  min-width: 200px;
  border-top: 1px solid #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 767px) {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.8rem 1.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background-color: #333;
  }
`;

const MobileAuthButtons = styled.div`
  padding: 0.8rem 1.5rem;
  border-top: 1px solid #333;

  button {
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .login {
    background: transparent;
    color: #fff;

    &:hover {
      background: #333;
    }
  }

  .register {
    background: #fff;
    color: #000;

    &:hover {
      background: #e0e0e0;
    }
  }
`;

const Header = ({ isLoggedIn }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Register", href: "/register" },
  ];

  return (
    <HeaderContainer>
      <Wrapper>
        {/* Logo Section */}
        <LogoSection>
          <Camera size={24} />
          <span>LUX MUNDI</span>
        </LogoSection>

        {/* Desktop Navigation */}
        <Nav>
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.href}>
              {link.name}
            </NavLink>
          ))}
        </Nav>

        {/* Search Section */}
        <SearchSection>
          {isSearchOpen ? (
            <SearchBar>
              <SearchInput type="text" placeholder="Search..." autoFocus />
              <button onClick={() => setIsSearchOpen(false)}>
                <X size={18} color="#fff" />
              </button>
            </SearchBar>
          ) : (
            <button onClick={() => setIsSearchOpen(true)}>
              <Search size={20} color="#fff" />
            </button>
          )}
        </SearchSection>

        {/* Auth/Profile Section */}
        {isLoggedIn ? (
          <ProfileSection>
            <User size={24} color="#fff" />
            <Avatar />
          </ProfileSection>
        ) : (
          <AuthButtons>
            <button>Log in</button>
            <button className="register">Register</button>
          </AuthButtons>
        )}

        {/* Mobile Menu Button */}
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
          <MobileAuthButtons>
            {isLoggedIn ? (
              <ProfileSection>
                <User size={24} color="#fff" />
                <Avatar />
              </ProfileSection>
            ) : (
              <>
                <button className="login">Log in</button>
                <button className="register">Register</button>
              </>
            )}
          </MobileAuthButtons>
        </MobileMenu>
      </Wrapper>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;

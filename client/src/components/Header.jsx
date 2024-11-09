import styled from "styled-components";
import { Camera, Search, X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  transition: transform 0.3s ease;
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
  background-color: transparent;
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
  background-color: transparent;
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

const SearchButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
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
  transition: background-color 0.2s ease;
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

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #333;
  color: #fff;
  font-weight: 500;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Nosotros", href: "#" },
    { name: "Destinos", href: "#" },
    { name: "Contacto", href: "#" },
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

        {/* Search and Auth Section */}
        <SearchSection>
          {isSearchOpen ? (
            <SearchBar>
              <SearchButton onClick={() => setIsSearchOpen(false)}>
                <Search size={18} color="#fff" />
              </SearchButton>
              <SearchInput type="text" placeholder="Search..." autoFocus />
              <SearchButton onClick={() => setIsSearchOpen(false)}>
                <X size={18} color="#fff" />
              </SearchButton>
            </SearchBar>
          ) : (
            <SearchButton onClick={() => setIsSearchOpen(true)}>
              <Search size={20} color="#fff" />
            </SearchButton>
          )}
        </SearchSection>

        {/* Auth Buttons */}
        <AuthButtons>
          <button>Log in</button>
          <button className="register">Register</button>
        </AuthButtons>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} color="#fff" strokeWidth={2} />
          ) : (
            <Menu size={24} color="#fff" strokeWidth={2} />
          )}
        </MobileMenuButton>

        <MobileMenu isOpen={isMenuOpen}>
          <MobileMenuHeader>
            <span>Menu</span>
            <CloseButton
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} color="#fff" strokeWidth={2} />
            </CloseButton>
          </MobileMenuHeader>
          <MobileNavLink key="nosotros" to="#">
            Nosotros
          </MobileNavLink>
          <MobileNavLink key="destinos" to="#">
            Destinos
          </MobileNavLink>
          <MobileNavLink key="contacto" to="#">
            Contacto
          </MobileNavLink>
          <MobileAuthButtons>
            <button className="login">Log in</button>
            <button className="register">Register</button>
          </MobileAuthButtons>
        </MobileMenu>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;

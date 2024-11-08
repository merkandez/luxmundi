import styled from "styled-components";
import { Camera, Search, X, Menu } from "lucide-react";
import { useState } from "react";

const HeaderContainer = styled.header`
  background-color: #000;
  color: #fff;
`;

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1.25rem;
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

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    color: #ccc;
    transform: scale(1.2);
  }
`;

const SearchSection = styled.div`
  position: relative;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  width: 16rem;
  padding: 0.25rem 1rem;
  background-color: transparent;
  border: none;
  color: #fff;
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

const MobileMenuButton = styled.div`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  padding: 1rem;

  @media (max-width: 767px) {
    display: block;
    background-color: #333;
  }
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #444;
    transform: scale(1.1);
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
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </Nav>

        {/* Search and Auth Section */}
        <SearchSection>
          {isSearchOpen ? (
            <SearchBar>
              <SearchInput type="text" placeholder="Buscar" />
              <button onClick={() => setIsSearchOpen(false)}>
                <X size={20} />
              </button>
            </SearchBar>
          ) : (
            <button onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
            </button>
          )}
        </SearchSection>

        {/* Auth Buttons */}
        <AuthButtons>
          <button>Log in</button>
          <button className="register">Register</button>
        </AuthButtons>

        {/* Mobile Menu Button */}
        <MobileMenuButton>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </MobileMenuButton>
      </Wrapper>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu>
          {navLinks.map((link) => (
            <MobileNavLink key={link.name} href={link.href}>
              {link.name}
            </MobileNavLink>
          ))}
          <MobileNavLink href="#">Log in</MobileNavLink>
          <button className="register">Register</button>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;

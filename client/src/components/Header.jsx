import styled from "styled-components";
import { Camera, Search, X, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileSettings from "./ProfileSettings";

const HeaderContainer = styled.header`
  background-color: #0a0a0a;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  height: 5rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
    justify-content: space-between;
  }
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: transform 0.3s ease;
  z-index: 20;

  &:hover {
    transform: translateY(-1px);
  }

  span {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 1px;

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`;

const Nav = styled.nav`
  display: none;
  margin-left: 4rem;

  @media (min-width: 768px) {
    display: flex;
    gap: 3rem;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.6rem 1rem;
  border-radius: 2px;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const SearchBar = styled.div`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #111;
  width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  &.active {
    width: 300px;
    opacity: 1;
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 5rem;
    left: 0;
    right: 0;
    transform: none;
    width: 100%;
    border-radius: 0;
    z-index: 1000;

    &.active {
      width: 100%;
      margin-right: 0;
    }
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 0.9rem;

  &::placeholder {
    color: #666;
  }

  &:focus {
    outline: none;
  }
`;

const AuthButtons = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;

  @media (min-width: 768px) {
    display: flex;
  }

  .login,
  .register {
    padding: 0.6rem 1.8rem;
    border-radius: 10px;
    cursor: pointer;
    min-width: 100px;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;

    @media (max-width: 1024px) {
      padding: 0.5rem 1.2rem;
      min-width: 90px;
    }
  }

  .login {
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;

    &:hover {
      background-color: #222;
      border-color: #444;
    }
  }

  .register {
    background-color: #fff;
    color: #000;
    border: none;

    &:hover {
      background-color: #f0f0f0;
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
  padding: 8px;
  transition: all 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  background-color: #0a0a0a;
  border-top: 1px solid #333;
  padding: 1rem 0;
  transform: translateY(${({ isOpen }) => (isOpen ? "0" : "-100%")});
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1a1a1a;
  }
`;

const Header = ({ isLoggedIn }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Nosotros", href: "/about" },
    { name: "Destinos", href: "/destinations" },
    { name: "Contacto", href: "/contact" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection to="/">
          <Camera size={32} />
          <span>LUX MUNDI</span>
        </LogoSection>

        <Nav>
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.href}>
              {link.name}
            </NavLink>
          ))}
        </Nav>

        <SearchSection>
          <SearchBar className={isSearchOpen ? "active" : ""}>
            <SearchInput
              type="text"
              placeholder="Search..."
              autoFocus={isSearchOpen}
            />
            <X
              size={16}
              color="#666"
              onClick={() => setIsSearchOpen(false)}
              style={{ cursor: "pointer" }}
            />
          </SearchBar>
          <SearchButton onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
          </SearchButton>
        </SearchSection>

        {isLoggedIn ? (
          <ProfileSettings username="John Doe" onLogout={handleLogout} />
        ) : (
          <AuthButtons>
            <Link to="/login">
              <button className="login">Log in</button>
            </Link>
            <Link to="/register">
              <button className="register">Register</button>
            </Link>
          </AuthButtons>
        )}

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
          {isLoggedIn ? (
            <>
              <MobileNavLink to="/profile">Profile</MobileNavLink>
              <MobileNavLink as="button" onClick={handleLogout}>
                Logout
              </MobileNavLink>
            </>
          ) : (
            <>
              <MobileNavLink to="/login">Log in</MobileNavLink>
              <MobileNavLink to="/register">Register</MobileNavLink>
            </>
          )}
        </MobileMenu>
      </Wrapper>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;

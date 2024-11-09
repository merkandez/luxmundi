import styled from "styled-components";
import { Camera, Search, X, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderContainer = styled.header`
  background-color: #0a0a0a;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }

  span {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 1px;
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
  border-radius: 2px;
  padding: 6px 12px;
  background-color: #111;
  width: 0;
  opacity: 0;
  overflow: hidden;
  transition: all 0.3s ease;

  &.active {
    width: 200px;
    opacity: 1;
    margin-right: 1rem;
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
  padding: 4px;
  border: none;
  color: #444;
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
  margin-left: 2rem;

  @media (min-width: 640px) {
    display: flex;
  }

  .login,
  .register {
    padding: 0.6rem 1.8rem;
    border-radius: 2px;
    cursor: pointer;
    min-width: 120px;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;
  }

  .login {
    border: 1px solid #fff;
    color: #fff;
    background-color: transparent;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .register {
    background-color: #fff;
    color: #000;
    border: 1px solid #fff;

    &:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  margin-left: 2rem;
  position: relative;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border: 1px solid #333;

  &:hover {
    background-color: #333;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
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
  font-size: 0.9rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const UserMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #111111;
  border: 1px solid #222;
  border-radius: 4px;
  padding: 0.5rem;
  min-width: 200px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const UserMenuItem = styled.button`
  width: 100%;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #222;
  }

  svg {
    opacity: 0.7;
  }
`;

const Header = ({ isLoggedIn }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Nosotros", href: "/about" },
    { name: "Destinos", href: "/destinations" },
    { name: "Contacto", href: "/contact" },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    setIsUserMenuOpen(false);
    navigate("/");
  };

  const handleProfileClick = () => {
    setIsUserMenuOpen(false);
    navigate("/profile");
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
          <ProfileSection>
            <Avatar onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
              <User size={20} color="#fff" />
            </Avatar>
            <UserMenu isOpen={isUserMenuOpen}>
              <UserMenuItem onClick={handleProfileClick}>
                <User size={18} />
                Profile
              </UserMenuItem>
              <UserMenuItem onClick={handleLogout}>
                <LogOut size={18} />
                Logout
              </UserMenuItem>
            </UserMenu>
          </ProfileSection>
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
          {isLoggedIn && (
            <>
              <MobileNavLink to="/profile">Profile</MobileNavLink>
              <MobileNavLink as="button" onClick={handleLogout}>
                Logout
              </MobileNavLink>
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

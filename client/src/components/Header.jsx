import styled from "styled-components";
import { Search, X, Menu } from "lucide-react";
import { BsCameraFill } from "react-icons/bs";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import LoginModal from "./LoginModal";
import ContactModal from "./ContactModal";
import RegisterModal from "./RegisterModal";
import ProfileSettings from "./ProfileSettings";

const HeaderContainer = styled.header`
  background-color: #0a0a0a;
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 4rem;
  }
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  z-index: 20;
  margin-right: 2rem;
  color: #fff;
  padding: 4px;

  &:hover {
    transform: scale(1.05);

    svg,
    span {
      color: #29c9a9;
    }
  }

  svg {
    transition: all 0.3s ease;
    width: 24px;
    height: 24px;
    color: #29c9a9;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 4px;
    color: #ffffff;
    margin: 4px;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ isActive }) =>
    isActive ? "#ffffff" : "rgba(255, 255, 255, 0.7)"};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.6rem 1rem;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  transition: all 0.2s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    background-color: #29c9a9;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #29c9a9;

    &:after {
      width: 100%;
    }
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }
`;

const SearchBar = styled.div`
  position: relative;
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
  }

  @media (max-width: 1024px) {
    &.active {
      width: 200px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    &.active {
      width: 100%;
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

  @media (max-width: 768px) {
    padding: 6px;

    svg {
      width: 18px;
      height: 18px;
    }
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

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    display: flex;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 4rem;
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

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const MobileNavLink = styled(({ onClick, ...props }) =>
  onClick ? <button onClick={onClick} {...props} /> : <Link {...props} />
)`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const NavButton = styled.button`
  color: ${({ isActive }) =>
    isActive ? "#ffffff" : "rgba(255, 255, 255, 0.7)"};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.6rem 1rem;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  transition: all 0.2s ease;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 50%;
    background-color: #29c9a9;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: #29c9a9;

    &:after {
      width: 100%;
    }
  }
`;

const Header = ({ isLoggedIn }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Nosotros", href: "/about" },
    { name: "Destinos", href: "/#explore" },
    { name: "Contacto", onClick: () => setIsContactModalOpen(true) },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/");
  };

  const handleRegister = (data) => {
    console.log("Register data:", data);
    // Add register logic here
    setIsRegisterModalOpen(false);
  };

  return (
    <HeaderContainer>
      <Wrapper>
        <LogoSection to="/">
          <BsCameraFill size={24} color="#ffffff" />
          <span>LUX MUNDI</span>
        </LogoSection>

        <Nav>
          {navLinks.map((link) =>
            link.onClick ? (
              <NavButton key={link.name} onClick={link.onClick}>
                {link.name}
              </NavButton>
            ) : (
              <NavLink key={link.name} to={link.href}>
                {link.name}
              </NavLink>
            )
          )}
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

          {isLoggedIn ? (
            <ProfileSettings />
          ) : (
            <AuthButtons>
              <button
                className="login"
                onClick={() => setIsLoginModalOpen(true)}
              >
                Log in
              </button>
              <button
                className="register"
                onClick={() => setIsRegisterModalOpen(true)}
              >
                Register
              </button>
            </AuthButtons>
          )}

          <LoginModal
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
            onSubmit={(data) => {
              console.log("Login data:", data);
              // Add login logic here
            }}
          />

          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />

          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={() => setIsRegisterModalOpen(false)}
            onSubmit={handleRegister}
          />

          <MobileMenuButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>

          <MobileMenu isOpen={isMenuOpen}>
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.name}
                to={link.href}
                onClick={link.onClick}
                as={link.onClick ? "button" : Link}
              >
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
                <MobileNavLink
                  as="button"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Log in
                </MobileNavLink>
                <MobileNavLink
                  as="button"
                  onClick={() => setIsRegisterModalOpen(true)}
                >
                  Register
                </MobileNavLink>
              </>
            )}
          </MobileMenu>
        </RightSection>
      </Wrapper>
    </HeaderContainer>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;

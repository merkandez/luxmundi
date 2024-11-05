import React, { useState, useCallback, memo } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { useResponsive } from "./hooks/useResponsive";
import { Camera } from "lucide-react";
import { HeaderContainer, NavContainer } from "./styles/HeaderStyles";
import Logo from "./components/Logo";
import DesktopNav from "./components/Navigation/DesktopNav";
import MobileNav from "./components/Navigation/MobileNav";
import SearchBar from "./components/Search/SearchBar";
import AuthButtons from "./components/Buttons/AuthButtons";
import { HamburgerButton, RightSection } from "./styles/HeaderStyles"; // Ensure these styles are defined
import { Menu, X } from "lucide-react"; // Ensure these icons are available

const navigationLinks = [
  { id: 1, label: "Nosotros", url: "#" },
  { id: 2, label: "Destinos", url: "#" },
  { id: 3, label: "Contacto", url: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isMobile = useResponsive();

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback((linkId) => {
    setIsMenuOpen(false);
    // Additional link click handling if needed
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <NavContainer>
          <Logo>
            <Camera aria-label="Site Logo" />
          </Logo>

          {!isMobile && <DesktopNav links={navigationLinks} />}

          <RightSection>
            <SearchBar value={searchValue} onChange={handleSearchChange} />

            <AuthButtons />

            {isMobile && (
              <HamburgerButton
                onClick={handleMenuToggle}
                aria-expanded={isMenuOpen}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </HamburgerButton>
            )}
          </RightSection>

          {isMobile && (
            <MobileNav
              isOpen={isMenuOpen}
              links={navigationLinks}
              onLinkClick={handleLinkClick}
            />
          )}
        </NavContainer>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default memo(Header);

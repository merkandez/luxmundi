import React from "react";
import styled from "styled-components";
import NavigationPillItem from "./NavigationPillItem";
import AuthButton from "./AuthButton";
import Logo from "./Logo";

const NAV_ITEMS = [
  { label: "Nosotros", isActive: true },
  { label: "Destinos", isActive: false },
  { label: "Contacto", isActive: false },
];

const AUTH_BUTTONS = [
  { label: "Log in", variant: "secondary" },
  { label: "Register", variant: "primary" },
];

const Navbar = () => (
  <NavContainer aria-label="Primary Navigation">
    <HeaderWrapper>
      <Logo />
      <PillList>
        {NAV_ITEMS.map((item) => (
          <NavigationPillItem key={item.label} {...item} />
        ))}
      </PillList>
      <AuthSection>
        {AUTH_BUTTONS.map((button) => (
          <AuthButton key={button.label} {...button} />
        ))}
      </AuthSection>
    </HeaderWrapper>
  </NavContainer>
);

const NavContainer = styled.nav`
  width: 100%;
  background-color: rgba(30, 30, 30, 1);
  border-bottom: 1px solid rgba(68, 68, 68, 1);
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

const PillList = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 0.5rem;
  color: #ffffff;
  white-space: nowrap;
  min-width: 240px;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: normal;
  }
`;

const AuthSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 178px;
`;

export default Navbar;

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

const NavBar = () => (
  <HeaderWrapper>
    <Logo />
    <PillList aria-label="Main Navigation">
      {NAV_ITEMS.map((item) => (
        <NavigationPillItem key={item.label} {...item} />
      ))}
    </PillList>
    <AuthSection aria-label="Authentication Options">
      {AUTH_BUTTONS.map((button) => (
        <AuthButton key={button.label} {...button} />
      ))}
    </AuthSection>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background-color: rgba(30, 30, 30, 1);
  border-bottom: 1px solid rgba(68, 68, 68, 1);

  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

const PillList = styled.nav`
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: flex-end;
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
  font-family: Arial, sans-serif;
  white-space: nowrap;
  min-width: 240px;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: normal;
  }
`;

const AuthSection = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 178px;
  font-weight: 400;
  font-size: 1rem;
  font-family: Arial, sans-serif;
`;

export default NavBar;

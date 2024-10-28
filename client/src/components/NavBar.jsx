import React from "react";
import styled from "styled-components";
import NavigationPillItem from "./NavigationPillItem";
import AuthButton from "./AuthButton";
import Logo from "./Logo";

const navigationItems = [
  { label: "Nosotros", isActive: true },
  { label: "Destinos", isActive: false },
  { label: "Contacto", isActive: false },
];

const authButtons = [
  { label: "Log in", variant: "secondary" },
  { label: "Register", variant: "primary" },
];

function NavigationHeader() {
  return (
    <HeaderWrapper>
      <Logo />
      <nav>
        <PillList role="navigation" aria-label="Main navigation">
          {navigationItems.map((item, index) => (
            <NavigationPillItem
              key={index}
              label={item.label}
              isActive={item.isActive}
            />
          ))}
        </PillList>
      </nav>
      <AuthSection>
        {authButtons.map((button, index) => (
          <AuthButton
            key={index}
            label={button.label}
            variant={button.variant}
          />
        ))}
      </AuthSection>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: rgba(30, 30, 30, 1);
  border-bottom: 1px solid rgba(68, 68, 68, 1);
  display: flex;
  align-items: center;
  gap: 24px;
  overflow: hidden;
  padding: 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const PillList = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  align-items: start;
  gap: 8px;
  color: var(--sds-color-text-default-default);
  white-space: nowrap;
  justify-content: end;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;
  font: var(--sds-typography-body-font-weight-regular)
    var(--sds-typography-body-size-medium) / 1
    var(--sds-typography-body-font-family);
  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const AuthSection = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 178px;
  margin: auto 0;
  font: var(--sds-typography-body-font-weight-regular)
    var(--sds-typography-body-size-medium) / 1
    var(--sds-typography-body-font-family);
`;

export default NavigationHeader;

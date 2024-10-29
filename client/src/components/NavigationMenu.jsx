import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  align-items: flex-start;
  gap: 8px;
  color: var(--sds-color-text-default-default);
  white-space: nowrap;
  justify-content: flex-end;
  flex-wrap: wrap;
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

const NavItem = styled.a`
  align-self: stretch;
  border-radius: 8px;
  gap: 8px;
  padding: 8px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &.active {
    background-color: #444;
    color: var(--sds-color-text-brand-on-brand-secondary);
  }

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const navigationItems = [
  { label: "Nosotros", isActive: true },
  { label: "Destinos", isActive: false },
  { label: "Contacto", isActive: false },
];

function NavigationMenu() {
  return (
    <NavWrapper>
      {navigationItems.map((item, index) => (
        <NavItem
          key={index}
          className={item.isActive ? "active" : ""}
          href={`#${item.label.toLowerCase()}`}
        >
          {item.label}
        </NavItem>
      ))}
    </NavWrapper>
  );
}

export default NavigationMenu;

// client/src/components/NavigationMenu.jsx
import NavigationPillItem from "./NavigationPillItem";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  min-width: 240px;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
  flex: 1;
  margin: 0;
  padding: 0;
  color: #ffffff;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const navigationItems = [
  { label: "Nosotros", href: "/quien-somos", isActive: false },
  { label: "Destinos", href: "/destinos", isActive: false },
  { label: "Contacto", href: "/contacto", isActive: false },
];

function NavigationMenu() {
  return (
    <NavWrapper>
      {navigationItems.map((item) => (
        <NavigationPillItem
          key={item.label}
          label={item.label}
          href={item.href}
          isActive={item.isActive}
        />
      ))}
    </NavWrapper>
  );
}

export default NavigationMenu;

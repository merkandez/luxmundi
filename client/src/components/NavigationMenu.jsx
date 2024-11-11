// client/src/components/NavigationMenu.jsx
import NavigationPillItem from "./NavigationPillItem";
import styled from "styled-components";
import ContactModal from "./ContactModal";
import { useState } from "react";

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

const NavigationMenu = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const navigationItems = [
    { label: "Nosotros", href: "/about", isActive: false },
    { label: "Destinos", href: "/destinations", isActive: false },
    {
      label: "Contacto",
      onClick: () => setIsContactModalOpen(true),
      isActive: false,
    },
  ];

  return (
    <NavWrapper>
      {navigationItems.map((item) => (
        <NavigationPillItem
          key={item.label}
          label={item.label}
          href={item.onClick ? undefined : item.href}
          onClick={item.onClick}
          isActive={item.isActive}
        />
      ))}

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </NavWrapper>
  );
};

export default NavigationMenu;

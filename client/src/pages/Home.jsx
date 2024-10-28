import styled from "styled-components";
import NavigationPillItem from "./NavigationPillItem";
import AuthButton from "./AuthButton";
import Logo from "./Logo";

const NAVIGATION_ITEMS = [
  { label: "Nosotros", isActive: true },
  { label: "Destinos", isActive: false },
  { label: "Contacto", isActive: false },
];

const AUTH_BUTTONS = [
  { label: "Log in", variant: "secondary" },
  { label: "Register", variant: "primary" },
];

const NavigationHeader = () => (
  <HeaderWrapper>
    <Logo />
    <PillList role="navigation">
      {NAVIGATION_ITEMS.map((item) => (
        <NavigationPillItem key={item.label} {...item} />
      ))}
    </PillList>
    <AuthSection>
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
  color: var(--sds-color-text-default-default);
  font: var(--sds-typography-body-font-weight-regular)
    var(--sds-typography-body-size-medium) / 1
    var(--sds-typography-body-font-family);
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
  font: inherit;
`;

export default NavigationHeader;

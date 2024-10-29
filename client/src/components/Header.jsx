import styled from "styled-components";
import Logo from "./Logo";
import NavigationMenu from "./NavigationMenu";
import AuthButtons from "./AuthButtons";

const HeaderWrapper = styled.header`
  background-color: #1e1e1e;
  border-bottom: 1px solid #444444;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  overflow: hidden;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Pill = styled.div`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? "#444444" : "transparent")};
  color: #ffffff;
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  cursor: pointer;

  &:hover {
    background-color: #444444;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid #ffffff" : "none"};
  background-color: ${({ variant }) =>
    variant === "primary" ? "#f5f5f5" : "transparent"};
  color: ${({ variant }) => (variant === "primary" ? "#000000" : "#ffffff")};

  &:hover {
    opacity: 0.9;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <NavigationMenu Pill={Pill} />
      <AuthButtons Button={Button} />
    </HeaderWrapper>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";
import Logo from "./compoeLogo";
import NavigationMenu from "./NavigationMenu";
import AuthButtons from "./AuthButtons";

const HeaderWrapper = styled.header`
  background-color: #1e1e1e;
  border-bottom: 1px solid #444;
  display: flex;
  align-items: center;
  gap: 24px;
  overflow: hidden;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 32px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <NavigationMenu />
      <AuthButtons />
    </HeaderWrapper>
  );
}

export default Header;

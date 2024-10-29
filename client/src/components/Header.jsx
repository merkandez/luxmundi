import React from "react";
import styled from "styled-components";
import NavigationMenu from "./NavigationMenu";
import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <Logo
          src="https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/c257a12346eeeecee857be6afa3cc07023ca1d4783452663ee41c967aa5c89c0?apiKey=4a6b075cba4d439db44d5a2134fb5890&"
          alt="Company Logo"
        />
      </LogoContainer>
      <NavigationMenu />
      <AuthButtons />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: #1e1e1e;
  border-bottom: 1px solid #444;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  padding: 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
`;

const Logo = styled.img`
  width: 24px;
  aspect-ratio: 0.69;
  object-fit: contain;
`;

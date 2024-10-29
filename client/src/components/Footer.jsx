import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <FooterWrapper>{/* Footer content */}</FooterWrapper>;
}

const FooterWrapper = styled.footer`
  background-color: #1e1e1e;
  border-top: 1px solid #444;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  padding: 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;
// update code to match the layout of the project

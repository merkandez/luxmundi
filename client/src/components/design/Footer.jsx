import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 My Website. Todos los derechos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 1rem;
  color: white;
  text-align: center;
  margin-top: auto;
`;
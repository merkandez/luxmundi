import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterColumn>
        <h3>Sobre Nosotros</h3>
        <ul>
          <li>Quien somos</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>Explore</h3>
        <ul>
          <li>Destinos</li>
          <li>Lo más visto</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>Recursos</h3>
        <ul>
          <li>Cursos Fotografía</li>
          <li>Contacto</li>
        </ul>
      </FooterColumn>
      <SubscribeColumn>
        <form>
          <input type="email" placeholder="you@example.com" />
          <button type="submit">Submit</button>
        </form>
      </SubscribeColumn>
      <FooterNav>
        <FooterLink to="/contact">Contact Us</FooterLink>
      </FooterNav>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #1e1e1e;
  border-top: 1px solid #444;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px 24px;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 16px;

  h3 {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 0.9rem;
      color: #cccccc;
      margin-bottom: 8px;
    }
  }
`;

const SubscribeColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;

  form {
    display: flex;

    input {
      padding: 8px;
      border-radius: 4px 0 0 4px;
      border: 1px solid #444;
      background-color: #333;
      color: #ffffff;
    }

    button {
      padding: 8px;
      border-radius: 0 4px 4px 0;
      border: 1px solid #444;
      background-color: #444;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;

const FooterLink = styled(Link)`
  // ... existing styles
`;

const FooterNav = styled.nav`
  // ... existing styles
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";

export default function Footer() {
  return (
    <FooterWrapper>
      <LogoSection>
        <BsCameraFill size={24} color="#ffffff" />
        <LogoText>LUX MUNDI</LogoText>
      </LogoSection>
      <FooterColumn>
        <h3>Sobre Nosotros</h3>
        <ul>
          <li>
            <FooterLink to="/quien-somos">Quien somos</FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>Explore</h3>
        <ul>
          <li>
            <FooterLink to="/destinos">Destinos</FooterLink>
          </li>
          <li>
            <FooterLink to="/lo-mas-visto">Lo más visto</FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <h3>Recursos</h3>
        <ul>
          <li>
            <FooterLink to="/cursos-fotografia">Cursos Fotografía</FooterLink>
          </li>
          <li>
            <FooterLink to="/contacto">Contacto</FooterLink>
          </li>
        </ul>
      </FooterColumn>
      <SocialMediaIcons>
        <FaTwitter size={24} />
        <FaInstagram size={24} />
        <FaYoutube size={24} />
        <FaLinkedin size={24} />
      </SocialMediaIcons>
      <SubscribeColumn>
        <p>Suscribate a nuestra newsletter!</p>
        <form>
          <input type="email" placeholder="you@example.com" />
          <button type="submit">Enviar</button>
        </form>
      </SubscribeColumn>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #0f0e0e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 60px;
  margin: 80px 60px;
  color: #ffffff;
  border-radius: 2px;
  box-shadow: 1 4px 24px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 24px;
    margin: 40px 20px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 42px;
  padding: 24px 24px;
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 4px;
  color: #ffffff;
  margin: 4px;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  margin: 16px;

  h3 {
    font-size: 1rem;
    margin-bottom: 8px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 0.9rem;
      color: #cccccc;
      margin-bottom: 4px;
    }
  }
`;

const SubscribeColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;

  p {
    font-size: 0.9rem;
    color: #ffffff;
    margin-bottom: 8px;
  }

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
      margin-left: 8px;
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

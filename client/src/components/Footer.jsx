import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <LogoSection>
        <CameraIcon size={24} />
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
          <button type="submit">Submit</button>
        </form>
      </SubscribeColumn>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #1e1e1e;
  border-top: 2px solid #444;
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

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 24px;
`;

const CameraIcon = styled.div`
  width: 24px;
  height: 24px;
  color: #fff;
  background-size: contain;
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: bold;
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

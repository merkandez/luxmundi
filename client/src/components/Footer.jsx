import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { BsCameraFill } from "react-icons/bs";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterContent>
        <LogoSection>
          <BsCameraFill size={24} color="#ffffff" />
          <LogoText>LUX MUNDI</LogoText>
        </LogoSection>

        <FooterColumns>
          <FooterColumn>
            <h3>Sobre Nosotros</h3>
            <ul>
              <li>
                <FooterLink to="/about">Quien somos</FooterLink>
              </li>
              <li>
                <FooterLink to="/under-construction">Nuestra Visión</FooterLink>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Explore</h3>
            <ul>
              <li>
                <FooterLink to="/destinations">Destinos</FooterLink>
              </li>
              <li>
                <FooterLink to="/under-construction">Lo más visto</FooterLink>
              </li>
              <li>
                <FooterLink to="/under-construction">Galería</FooterLink>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Recursos</h3>
            <ul>
              <li>
                <FooterLink to="/under-construction">
                  Cursos Fotografía
                </FooterLink>
              </li>
              <li>
                <FooterLink onClick={() => setIsContactModalOpen(true)}>
                  Contacto
                </FooterLink>
              </li>
              <li>
                <FooterLink to="/under-construction">Soporte</FooterLink>
              </li>
            </ul>
          </FooterColumn>

          <SubscribeColumn>
            <h3>Newsletter</h3>
            <p>Suscríbase para recibir las últimas actualizaciones</p>
            <SubscribeForm>
              <input type="email" placeholder="you@example.com" />
              <button type="submit">Enviar</button>
            </SubscribeForm>
          </SubscribeColumn>
        </FooterColumns>

        <FooterBottom>
          <SocialMediaIcons>
            <SocialIcon href="#">
              <FaTwitter size={20} />
            </SocialIcon>
            <SocialIcon href="#">
              <FaInstagram size={20} />
            </SocialIcon>
            <SocialIcon href="#">
              <FaYoutube size={20} />
            </SocialIcon>
            <SocialIcon href="#">
              <FaLinkedin size={20} />
            </SocialIcon>
          </SocialMediaIcons>
          <Copyright>© {currentYear} Lux Mundi. All rights reserved.</Copyright>
        </FooterBottom>
      </FooterContent>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #0f0e0e;
  color: #ffffff;
  padding: 60px 0 20px;
  margin-top: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 24px;
  }
`;

const SubscribeForm = styled.form`
  display: flex;
  gap: 8px;
  margin-top: 16px;

  input {
    flex: 1;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #333;
    background-color: #1a1a1a;
    color: #ffffff;
    min-width: 200px;

    &:focus {
      outline: none;
      border-color: #444;
    }
  }

  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f0f0f0;
      transform: translateY(-2px);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Copyright = styled.p`
  color: #888;
  font-size: 0.9rem;
  text-align: center;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
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
      background-color: #ffffff;
      color: #444;
      cursor: pointer;
      margin-left: 8px;
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  padding: 2px 0;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }
`;

import styled from "styled-components";
import { Construction } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnderConstruction = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <Construction size={64} />
        <Title>Página en construcción</Title>
        <Description>
          Estamos trabajando duro para traerte algo increíble. Por favor, vuelve
          más tarde.
        </Description>
        <BackButton onClick={() => navigate(-1)}>Volver</BackButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #0a0a0a;
  margin-top: 1rem;
`;

const Content = styled.div`
  text-align: center;
  color: #fff;
  max-width: 600px;

  svg {
    margin-bottom: 2rem;
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BackButton = styled.button`
  padding: 0.75rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }
`;

export default UnderConstruction;

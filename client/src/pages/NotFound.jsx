import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <ErrorSection>
          <ErrorCode>404</ErrorCode>
          <Title>Page Not Found</Title>
          <Description>
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </Description>
          <ButtonGroup>
            <BackButton onClick={() => navigate(-1)}>
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </BackButton>
            <HomeButton onClick={() => navigate("/")}>
              Return to Home
            </HomeButton>
          </ButtonGroup>
        </ErrorSection>

        <ImageSection>
          <BackgroundImage
            src="/path/to/your/image.jpg"
            alt="404 illustration"
          />
          <Overlay />
        </ImageSection>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ErrorSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    order: 2;
  }
`;

const ErrorCode = styled.span`
  font-size: 8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.1);
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 6rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
`;

const HomeButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #fff;
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-1px);
  }
`;

const ImageSection = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 400px;

  @media (max-width: 768px) {
    order: 1;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    min-height: 250px;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.8),
    rgba(10, 10, 10, 0.4)
  );
`;

export default NotFoundPage;

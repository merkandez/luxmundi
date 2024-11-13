import styled from "styled-components";
import CloseButton from "../components/CloseButton";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const Message = styled.p`
  color: #b3b3b3;
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: white;
  color: #1e1e1e;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const RightSection = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    flex: 1;
    position: relative;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(30, 30, 30, 0.5), transparent);
`;

const MobileBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const NotFoundPage = () => {
  return (
    <Container>
      <CloseButton />
      {/* Left content section */}
      <LeftSection>
        <ContentWrapper>
          <Title>Uh oh, nao encontramos esa pagina...</Title>
          <Message>
            Lo sentimos, la página que estás buscando no existe o ha sido
            movida.
          </Message>
          <Button onClick={() => (window.location.href = "/")}>
            Volver a Home
          </Button>
        </ContentWrapper>
      </LeftSection>

      {/* Right image section for desktop */}
      <RightSection>
        <Image src="/api/placeholder/800/600" alt="Mountain landscape" />
        <Overlay />
      </RightSection>

      {/* Background image for mobile and tablet */}
      <MobileBackground>
        <Image src="/api/placeholder/400/800" alt="Mountain landscape mobile" />
        <MobileOverlay />
      </MobileBackground>
    </Container>
  );
};

export default NotFoundPage;

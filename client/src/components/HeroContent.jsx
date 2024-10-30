import styled from "styled-components";

function HeroContent({ title, subtitle }) {
  return (
    <ContentWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  color: #cccccc;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default HeroContent;

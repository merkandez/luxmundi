// HeroSection.jsx
import React from 'react';
import styled from 'styled-components';

function HeroSection({ title }) {
  return (
    <HeroWrapper>
      <ContentContainer>
        <MainTitle>{title}</MainTitle>
      </ContentContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.section`
  background-color: rgba(44, 44, 44, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 64px 71px;

  @media (max-width: 991px) {
    padding: 80px 20px 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 800px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default HeroSection;

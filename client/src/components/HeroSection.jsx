import React from "react";
import styled from "styled-components";


function HeroSection({ }) {
  

    return (
        <HeroWrapper>
        <ContentContainer>
          <MainTitle>Lux Mundi</MainTitle>
          <SubTitle>Subtitle</SubTitle>
        </ContentContainer>
      </HeroWrapper>
      
      
    );
  };


  
  const HeroWrapper = styled.section`
    background-color: rgba(44, 44, 44, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 1.2;
    justify-content: flex-start;
    font-size: 30px;
    padding: 160px 64px 71px;
    @media (max-width: 991px) {
      padding: 100px 20px 0;
    }
  `;
  
  const ContentContainer = styled.div`
    display: flex;
    width: 348px;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  `;
  
  const MainTitle = styled.h1`
    color: white;
    letter-spacing: -2.16px;
    font: var(--sds-typography-title-hero-font-weight) var(--sds-typography-title-hero-size) var(--sds-typography-title-hero-font-family);
    @media (max-width: 991px) {
      font-size: 40px;
    }
  `;
  
  const SubTitle = styled.h2`
    color: white;
    
    margin-top: 8px;
    font: var(--sds-typography-subtitle-font-weight) var(--sds-typography-subtitle-size-base) var(--sds-typography-subtitle-font-family);
  `;
  
  export default HeroSection;
  
import React from "react";
import styled from "styled-components";


function HeroSection() {
  

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
    justify-content: center; /* Centra verticalmente */
    font-size: 30px;
    padding: 120px 64px 71px; /* Ajuste del padding-top para subir el contenido */
    @media (max-width: 991px) {
      padding: 80px 20px 0; /* Ajuste en pantallas más pequeñas */
    }
  `;
  
  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
  
  const SubTitle = styled.h2`
   font-size: 1.2rem;
   font-weight: 400;
   color: #cccccc;
   margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  `;
  
  export default HeroSection;
  
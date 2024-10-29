import React from "react";
import styled from "styled-components";
import HeroContent from "./HeroContent";
import ButtonGroup from "./ButtonGroup";

function LuxMundiHero() {
  return (
    <HeroSection>
      <HeroContent title="Lux Mundi" subtitle="algo muy guay aqui" />
      <ButtonGroup
        buttons={[
          { text: "Ver", variant: "outline" },
          { text: "Crear", variant: "solid" },
        ]}
      />
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 107px 24px;
  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

export default LuxMundiHero;

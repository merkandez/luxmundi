import React from "react";
import ExploreSection from "../components/ExploreSection";
import CardsContainer from "../components/CardContainer";
import axios from 'axios';


function HomePage() {
  return (
    <div>
      <ExploreSection>
        <h2>Explore</h2>
        <p>Ultimos posts</p>
        <CardsContainer></CardsContainer>
        </ExploreSection>
      {/*<HeroSection></HeroSection> Se muestra en el página principal*/}
      {/*<ImageContent></ImageContent> Se muestra en el página principal*/}
       
    </div>
  );
}

export default HomePage;


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
      {/*<HeroSection></HeroSection> */}
      {/*<ImageContent></ImageContent> */}
       
    </div>
  );
}

export default HomePage;


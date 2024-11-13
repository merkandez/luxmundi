import styled from 'styled-components';
import LuxMundiHero from '../components/LuxMundiHero';
import ExploreSection from '../components/ExploreSection';
import React from 'react';
//import LogoutButton from '../components/LogoutButton'; //Yan no 
import CardsContainer from "../components/CardContainer";


function HomePage() {
  return (
    <div>
    <HomeWrapper>
      <LuxMundiHero />
      <ExploreSection> 
      <h2>Explore</h2>
      <p>Ultimos posts</p>
      <CardsContainer></CardsContainer>
      </ExploreSection>
      {/*<HeroSection></HeroSection> Se muestra en el página principal*/}
      {/*<ImageContent></ImageContent> Se muestra en el página principal*/}
    </HomeWrapper>
    </div>
  );
}

const HomeWrapper = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

export default HomePage;

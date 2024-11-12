import styled from 'styled-components';
import LuxMundiHero from '../components/LuxMundiHero';
import ExploreSection from '../components/ExploreSection';
import React from 'react';
//import LogoutButton from '../components/LogoutButton'; //Yan no 
import CardsContainer from "../components/CardContainer";


// const cardData = [
//   {
//     title: 'Machu Pichu',
//     content:
//       'Discover the ancient Incan city nestled in the Andes Mountains.',
//   },
//   {
//     title: 'Nueva Zelandia',
//     content:
//       'Explore the stunning landscapes and vibrant culture of New Zealand.',
//   },
//   {
//     title: 'The Great Wall',
//     content:
//       "Experience the grandeur of one of the world's most famous landmarks.",
//   },
//   {
//     title: 'Eiffel Tower',
//     content:
//       'Visit the iconic symbol of Paris and enjoy breathtaking views.',
//   },
//   {
//     title: 'Grand Canyon',
//     content:
//       'Marvel at the immense size and beauty of this natural wonder.',
//   },
//   {
//     title: 'Sydney Opera House',
//     content:
//       'Enjoy a performance at this architectural masterpiece in Australia.',
//   },
//   // Adding more cards to test pagination
//   {
//     title: 'Santorini',
//     content:
//       'Experience the stunning white architecture and Mediterranean views.',
//   },
//   {
//     title: 'Mount Fuji',
//     content:
//       "Climb Japan's highest peak and witness breathtaking sunrises.",
//   },
//   {
//     title: 'Venice',
//     content: 'Navigate the romantic canals of this unique Italian city.',
//   },
//   {
//     title: 'Petra',
//     content: 'Explore the ancient rose-colored city carved into rock.',
//   },
//   {
//     title: 'Taj Mahal',
//     content: 'Visit this magnificent monument of eternal love in India.',
//   },
//   {
//     title: 'Great Barrier Reef',
//     content: "Dive into the world's largest coral reef system.",
//   },
// ];

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

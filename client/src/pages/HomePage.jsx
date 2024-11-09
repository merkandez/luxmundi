import styled from "styled-components";
import LuxMundiHero from "../components/LuxMundiHero";
import Footer from "../components/Footer";
import ExploreSection from "../components/ExploreSection";
import CardsContainer from "../components/CardContainer";
import Card from "../components/Card";
import HeroContent from "../components/HeroContent";

//cambiar el json por la base de datos
//description cambiar por contenido de hasta 10 palabras.

const cardData = [
  {
    title: "Machu Pichu",
    description:
      "Discover the ancient Incan city nestled in the Andes Mountains.",
  },
  {
    title: "Nueva Zelandia",
    description:
      "Explore the stunning landscapes and vibrant culture of New Zealand.",
  },
  {
    title: "The Great Wall",
    description:
      "Experience the grandeur of one of the world's most famous landmarks.",
  },
  {
    title: "Eiffel Tower",
    description:
      "Visit the iconic symbol of Paris and enjoy breathtaking views.",
  },
  {
    title: "Grand Canyon",
    description:
      "Marvel at the immense size and beauty of this natural wonder.",
  },
  {
    title: "Sydney Opera House",
    description:
      "Enjoy a performance at this architectural masterpiece in Australia.",
  },
];

function HomePage() {
  return (
    <HomeWrapper>
      <HeroContent
        title="Welcome to Lux Mundi"
        subtitle="Discover Amazing Places Around the World"
      />
      <LuxMundiHero />
      <ExploreSection>
        <h2>Explore</h2>
        <p>Ultimos posts</p>
        <CardsContainer>
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
            />
          ))}
        </CardsContainer>
      </ExploreSection>
      <Footer />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #1e1e1e;
  min-height: 100vh;
`;

export default HomePage;

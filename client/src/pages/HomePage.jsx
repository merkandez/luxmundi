import styled from "styled-components";
import LuxMundiHero from "../components/LuxMundiHero";
import ExploreSection from "../components/ExploreSection";
import { useNavigate } from "react-router-dom";

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
  // Adding more cards to test pagination
  {
    title: "Santorini",
    description:
      "Experience the stunning white architecture and Mediterranean views.",
  },
  {
    title: "Mount Fuji",
    description:
      "Climb Japan's highest peak and witness breathtaking sunrises.",
  },
  {
    title: "Venice",
    description: "Navigate the romantic canals of this unique Italian city.",
  },
  {
    title: "Petra",
    description: "Explore the ancient rose-colored city carved into rock.",
  },
  {
    title: "Taj Mahal",
    description: "Visit this magnificent monument of eternal love in India.",
  },
  {
    title: "Great Barrier Reef",
    description: "Dive into the world's largest coral reef system.",
  },
];

function HomePage() {
  const navigate = useNavigate();

  const handleCardClick = (destination) => {
    // Convert title to URL-friendly format
    const formattedDestination = destination.toLowerCase().replace(/\s+/g, "-");
    navigate(`/destination/${formattedDestination}`);
  };

  return (
    <HomeWrapper>
      <LuxMundiHero />
      <ExploreSection cards={cardData} onCardClick={handleCardClick} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default HomePage;

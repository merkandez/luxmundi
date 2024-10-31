import ExploreSection from "../components/ExploreSection";
import CardsContainer from "../components/CardContainer";
import Card from "../components/Card";

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
    <div>
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
    
    </div>
  );
}

export default HomePage;


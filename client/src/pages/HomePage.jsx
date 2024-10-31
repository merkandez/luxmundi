import ExploreSection from "../components/ExploreSection";
import CardsContainer from "../components/CardContainer";
import Card from "../components/Card";

const cardData = [
  {
    title: "Machu Pichu",
    content:
      "Discover the ancient Incan city nestled in the Andes Mountains.",
  },
  {
    title: "Nueva Zelandia",
    content:
      "Explore the stunning landscapes and vibrant culture of New Zealand.",
  },
  {
    title: "The Great Wall",
    content:
      "Experience the grandeur of one of the world's most famous landmarks.",
  },
  {
    title: "Eiffel Tower",
    content:
      "Visit the iconic symbol of Paris and enjoy breathtaking views.",
  },
  {
    title: "Grand Canyon",
    content:
      "Marvel at the immense size and beauty of this natural wonder.",
  },
  {
    title: "Sydney Opera House",
    content:
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
              content={card.content}
            />
          ))}
        </CardsContainer>
      </ExploreSection>
    
    </div>
  );
}

export default HomePage;


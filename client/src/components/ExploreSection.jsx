import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
const ExploreSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;

  const exploreCards = [
    {
      title: "Machu Picchu",
      description:
        "Discover the ancient Incan city nestled in the Andes Mountains.",
      image: "https://source.unsplash.com/random/800x600/?machu-picchu",
    },
    {
      title: "Santorini",
      description:
        "Experience the stunning white architecture and blue domes of Greece.",
      image: "https://source.unsplash.com/random/800x600/?santorini",
    },
    {
      title: "Taj Mahal",
      description:
        "Visit this magnificent monument of eternal love in Agra, India.",
      image: "https://source.unsplash.com/random/800x600/?taj-mahal",
    },
    {
      title: "Paris",
      description:
        "Explore the romantic streets and iconic landmarks of the City of Light.",
      image: "https://source.unsplash.com/random/800x600/?paris",
    },
    {
      title: "Tokyo",
      description:
        "Immerse yourself in the vibrant blend of tradition and technology.",
      image: "https://source.unsplash.com/random/800x600/?tokyo",
    },
    {
      title: "Venice",
      description:
        "Navigate through the romantic canals of this historic Italian city.",
      image: "https://source.unsplash.com/random/800x600/?venice",
    },
    {
      title: "Grand Canyon",
      description: "Marvel at one of nature's most spectacular creations.",
      image: "https://source.unsplash.com/random/800x600/?grand-canyon",
    },
    {
      title: "Petra",
      description:
        "Explore the ancient rose-red city carved into desert cliffs.",
      image: "https://source.unsplash.com/random/800x600/?petra-jordan",
    },
    {
      title: "Great Wall",
      description: "Walk along this incredible feat of ancient engineering.",
      image: "https://source.unsplash.com/random/800x600/?great-wall-china",
    },
    {
      title: "Bali",
      description:
        "Experience the perfect blend of beaches, culture and serenity.",
      image: "https://source.unsplash.com/random/800x600/?bali",
    },
    {
      title: "Iceland",
      description: "Witness the dramatic landscapes of fire and ice.",
      image: "https://source.unsplash.com/random/800x600/?iceland",
    },
    {
      title: "Maldives",
      description:
        "Relax in paradise with crystal clear waters and white beaches.",
      image: "https://source.unsplash.com/random/800x600/?maldives",
    },
  ];

  const totalPages = Math.max(1, Math.ceil(exploreCards.length / cardsPerPage));

  // const exploreCards = [
  //   {
  //     title: "Machu Picchu",
  //     description:
  //       "Embárcate en un viaje a la antigua ciudad inca, ubicada en lo alto de las montañas de los Andes, y maravíllate con sus impresionantes ruinas y vistas.",
  //     image: "https://source.unsplash.com/random/800x600/?machu-picchu",
  //   },
  //   {
  //     title: "Santorini",
  //     description:
  //       "Disfruta de las famosas puestas de sol y las icónicas casas blancas de esta isla griega, rodeada de aguas cristalinas y paisajes de ensueño.",
  //     image: "https://source.unsplash.com/random/800x600/?santorini",
  //   },
  //   {
  //     title: "Taj Mahal",
  //     description:
  //       "Descubre el símbolo del amor eterno en Agra, India. El Taj Mahal, con su majestuosa arquitectura de mármol blanco y sus jardines, es una de las Siete Maravillas del Mundo Moderno.",
  //     image: "https://source.unsplash.com/random/800x600/?taj-mahal",
  //   },
  //   {
  //     title: "Paris",
  //     description:
  //       "La Ciudad de la Luz te espera con la icónica Torre Eiffel, museos de clase mundial y encantadoras calles. Vive el romance y la cultura en cada rincón de París.",
  //     image: "https://source.unsplash.com/random/800x600/?paris",
  //   },
  //   {
  //     title: "Kyoto",
  //     description:
  //       "Explora la cultura japonesa a través de sus templos antiguos, jardines de cerezos y rituales tradicionales en la encantadora ciudad de Kioto.",
  //     image: "https://source.unsplash.com/random/800x600/?tokyo",
  //   },
  //   {
  //     title: "Roma",
  //     description:
  //       "Revive la historia de la antigua Roma explorando el Coliseo, el Foro Romano y los rincones más emblemáticos de esta ciudad eterna.",
  //     image: "https://source.unsplash.com/random/800x600/?venice",
  //   },
  //   {
  //     title: "Gran Cañón",
  //     description: "Admira la inmensidad del Gran Cañón en Arizona, una maravilla natural esculpida por el río Colorado y uno de los paisajes más impresionantes del mundo.",
  //     image: "https://source.unsplash.com/random/800x600/?grand-canyon",
  //   },
  //   {
  //     title: "Petra",
  //     description:
  //       "Admira la ciudad tallada en roca de Petra, un tesoro arqueológico en Jordania, y explora sus túneles secretos y estructuras monumentales.",
  //     image: "https://source.unsplash.com/random/800x600/?petra-jordan",
  //   },
  //   {
  //     title: "Gran Muralla China",
  //     description: "Recorre kilómetros de historia en la Gran Muralla China, una construcción milenaria que serpentea a través de montañas y paisajes impresionantes.",
  //     image: "https://source.unsplash.com/random/800x600/?great-wall-china",
  //   },
  //   {
  //     title: "Bali",
  //     description:
  //       "Explora Bali, la Isla de los Dioses, donde encontrarás templos ancestrales, playas paradisíacas y una cultura vibrante en cada rincón.",
  //     image: "https://source.unsplash.com/random/800x600/?bali",
  //   },
  //   {
  //     title: "Islandia",
  //     description: "Aventúrate en los paisajes surrealistas de Islandia, con cascadas, glaciares, géiseres y auroras boreales que crean un escenario de otro mundo.",
  //     image: "https://source.unsplash.com/random/800x600/?iceland",
  //   },
  //   {
  //     title: "Maldivas",
  //     description:
  //       "Sumérgete en la serenidad de las Maldivas, donde playas de arena blanca y aguas cristalinas crean el destino perfecto para unas vacaciones de ensueño.",
  //     image: "https://source.unsplash.com/random/800x600/?maldives",
  //   },
  // ];

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = exploreCards.slice(indexOfFirstCard, indexOfLastCard);
  

  return (
    <Section id="explore">
      <SectionHeader>
        <Title>Destinos</Title>
        <Subtitle>Discover amazing destinations</Subtitle>
      </SectionHeader>

      <CardGrid>
        {currentCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />,
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </CardGrid>

      {totalPages > 1 && (
        <Pagination>
          <PaginationButton
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>

          <PageNumbers>
            {[...Array(totalPages)].map((_, index) => (
              <PageNumber
                key={index}
                active={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PageNumber>
            ))}
          </PageNumbers>

          <PaginationButton
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </Pagination>
      )}
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 20px;
  padding: 60px 20px;
  background-color: #111111;
  margin-bottom: 0;
  margin-bottom: 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
  max-width: 800px;
  margin: 0 auto 48px;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto 48px;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 16px;

  @media (max-width: 991px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 991px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  color: #999;
  font-size: 1.1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  padding: 0 20px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 1.5rem;
  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 1.5rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 48px auto;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    margin: 32px 16px;
  }
  margin: 48px auto;
  padding: 24px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  max-width: 600px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    margin: 32px 16px;
  }
`;

const PaginationButton = styled.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 8px 24px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 8px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  font-weight: 500;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PageNumbers = styled.div`
  display: flex;
  gap: 8px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PageNumber = styled.button`
  width: 36px;
  height: 36px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  color: #fff;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.active ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.1)" : "transparent"};
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  font-weight: ${(props) => (props.active ? "600" : "400")};

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }
`;

export default ExploreSection;

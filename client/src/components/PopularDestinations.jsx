import styled from "styled-components";
import WorldMap from "../assets/mapa.svg";
import { motion } from "framer-motion";

const PopularDestinations = () => {
  const popularPosts = [
    {
      id: 1,
      location: "Paris",
      coordinates: { x: "48%", y: "35%" },
      likes: 2345,
      image: "path/to/paris-image.jpg",
    },
    {
      id: 2,
      location: "Tokyo",
      coordinates: { x: "82%", y: "42%" },
      likes: 2100,
      image: "path/to/tokyo-image.jpg",
    },
    // Add more popular destinations
  ];

  return (
    <Container>
      <Title>Los Destinos Más Populares de Este Mes</Title>
      <MapContainer>
        <StyledWorldMap as="img" src={WorldMap} />
        {popularPosts.map((post) => (
          <PopularSpot
            key={post.id}
            style={{ left: post.coordinates.x, top: post.coordinates.y }}
            whileHover={{ scale: 1.1 }}
          >
            <SpotPulse />
            <SpotTooltip>
              <TooltipImage src={post.image} alt={post.location} />
              <TooltipContent>
                <LocationName>{post.location}</LocationName>
                <LikeCount>{post.likes} likes</LikeCount>
              </TooltipContent>
            </SpotTooltip>
          </PopularSpot>
        ))}
      </MapContainer>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 20px;
  background-color: #0a0a0a;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin: 0 auto 3rem;

  @media (max-width: 991px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const MapContainer = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 991px) {
    padding: 1rem 0;
  }
`;

const StyledWorldMap = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.6;
`;

const PopularSpot = styled(motion.div)`
  position: absolute;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
`;

const SpotPulse = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  animation: pulse 2s ease-out infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const SpotTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);

  ${PopularSpot}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-20px);
  }
`;

const TooltipImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.75rem;

  @media (max-width: 480px) {
    height: 120px;
  }
`;

const TooltipContent = styled.div`
  text-align: center;
`;

const LocationName = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const LikeCount = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

export default PopularDestinations;

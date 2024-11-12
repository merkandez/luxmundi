import styled from "styled-components";
import WorldMapSvg from "../assets/mapa.svg";
import { motion } from "framer-motion";

const PopularDestinations = () => {
  const popularPosts = [
    {
      id: 1,
      location: "Paris",
      coordinates: { x: "48%", y: "35%" },
      likes: 2345,
      image: "https://source.unsplash.com/random/800x600/?paris",
    },
    {
      id: 2,
      location: "Tokyo",
      coordinates: { x: "82%", y: "42%" },
      likes: 2100,
      image: "https://source.unsplash.com/random/800x600/?tokyo",
    },
  ];

  return (
    <Container>
      <Title>Los Destinos Más Populares de Este Mes</Title>
      <MapWrapper>
        <MapContainer>
          <StyledWorldMap src={WorldMapSvg} alt="World Map" />
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
      </MapWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 1rem;
  background-color: #0a0a0a;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const MapWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
`;

const StyledWorldMap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.6;
`;

const PopularSpot = styled(motion.div)`
  position: absolute;
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
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
  transform: translateX(-50%) translateY(10px);
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem;
  width: 200px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 10;

  ${PopularSpot}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 160px;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 140px;
    padding: 0.5rem;
  }
`;

const TooltipImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    height: 100px;
  }
`;

const TooltipContent = styled.div`
  text-align: center;
`;

const LocationName = styled.h3`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const LikeCount = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

export default PopularDestinations;

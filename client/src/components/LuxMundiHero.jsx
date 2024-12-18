import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Quitamos Navigation
import { ButtonGroup } from './ButtonGroup';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';

function LuxMundiHero() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadRandomImages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/random?limit=5`
        );
        if (Array.isArray(response.data)) {
          setImages(response.data);
        } else {
          console.error('La respuesta no es un array:', response.data);
        }
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      }
    };

    loadRandomImages();
  }, []);

  return (
    <HeroSection>
      <ContentWrapper>
        <TextContent>
          <Overline>Viajes & Fotografía</Overline>
          <Title>Explorando el mundo a través de cinco miradas únicas</Title>
          <Description>
            Bienvenidos a nuestro rincón digital donde cinco fotógrafos viajeros
            compartimos nuestras aventuras, técnicas y perspectivas únicas.
          </Description>
          <ButtonWrapper>
            <ButtonGroup
              buttons={[
                { text: 'Explore Destinations', variant: 'outline' },
                { text: 'Start Creating', variant: 'solid' },
              ]}
            />
          </ButtonWrapper>
        </TextContent>

        <SliderWrapper>
          {images.length > 0 ? (
            <Swiper
              modules={[Pagination, Autoplay]} // Eliminamos Navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              speed={1000}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image src={image.imageUrl} alt='Random Travel Photography' />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No hay imágenes disponibles</p>
          )}
        </SliderWrapper>
      </ContentWrapper>
    </HeroSection>
  );
}

//Estilos

const HeroSection = styled.section`
  background-color: #111111;
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  padding: 7rem 20px 4rem;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 6rem 20px 3rem;
    min-height: auto;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 4rem;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 45%;
  padding-right: 2rem;

  @media (max-width: 991px) {
    max-width: 600px;
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }
`;

const Overline = styled.span`
  font-family: 'DM Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: #666666;
  display: block;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 991px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #999999;
  margin-bottom: 2rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
`;

const SliderWrapper = styled.div`
  flex: 1;
  max-width: 55%;
  height: 400px;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    width: 24px;
    background: #ffffff;
    border-radius: 4px;
    opacity: 1;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export default LuxMundiHero;

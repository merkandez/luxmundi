import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ButtonGroup } from "./ButtonGroup";
import "swiper/css";
import "swiper/css/pagination";

function LuxMundiHero() {
  return (
    <HeroSection>
      <ContentWrapper>
        <TextContent>
          <Overline>Travel & Photography</Overline>
          <Title>Capture the world through our lens</Title>
          <Description>
            Discover breathtaking destinations and master the art of photography
            with our curated experiences and expert guidance.
          </Description>
          <ButtonWrapper>
            <ButtonGroup
              buttons={[
                { text: "Explore Destinations", variant: "outline" },
                { text: "Start Creating", variant: "solid" },
              ]}
            />
          </ButtonWrapper>
        </TextContent>

        <SliderWrapper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
              bulletClass: "swiper-pagination-bullet",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
          >
            <SwiperSlide>
              <Image
                src="https://source.unsplash.com/random/1200x800/?landscape,travel"
                alt="Travel Photography"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://source.unsplash.com/random/1200x800/?city,architecture"
                alt="Urban Photography"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="https://source.unsplash.com/random/1200x800/?nature,wildlife"
                alt="Nature Photography"
              />
            </SwiperSlide>
          </Swiper>
        </SliderWrapper>
      </ContentWrapper>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background-color: #111111;
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 8rem 2rem 4rem;
  overflow: hidden;

  @media (max-width: 991px) {
    padding: 6rem 1rem 2rem;
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
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 40%;
  padding: 0 2rem;
  margin-right: auto;

  @media (max-width: 991px) {
    max-width: 100%;
    text-align: center;
    padding: 2rem 1rem;
    margin-right: 0;
  }
`;

const Overline = styled.span`
  font-family: "DM Sans", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  color: #666666;
  display: block;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  @media (max-width: 1200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 991px) {
    font-size: 2.4rem;
  }
`;

const Description = styled.p`
  font-family: "DM Sans", sans-serif;
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
  max-width: 60%;
  height: 70vh;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .swiper-pagination-bullet {
    background: #666666;
    opacity: 0.5;
    width: 8px;
    height: 8px;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
    opacity: 1;
    width: 24px;
    border-radius: 4px;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default LuxMundiHero;

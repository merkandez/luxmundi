import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ButtonGroup } from "../components/ButtonGroup";

// Only import the base Swiper styles (required)
import "swiper/css";

function LuxMundiHero() {
  return (
    <HeroSection>
      <ButtonWrapper>
        <ButtonGroup
          buttons={[
            { text: "Ver", variant: "outline" },
            { text: "Crear", variant: "solid" },
          ]}
        />
      </ButtonWrapper>
      <SliderWrapper>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={500}
        >
          <SwiperSlide>
            <Image
              src="https://via.placeholder.com/800x400?text=Image+1"
              alt="Lux Mundi Image 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://via.placeholder.com/800x400?text=Image+2"
              alt="Lux Mundi Image 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://via.placeholder.com/800x400?text=Image+3"
              alt="Lux Mundi Image 3"
            />
          </SwiperSlide>
        </Swiper>
      </SliderWrapper>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  background-color: #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 24px;
  color: #ffffff;
  text-align: center;
  width: 100%;
  height: 50vh;

  @media (max-width: 991px) {
    padding: 40px 20px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;

  .swiper {
    width: 100%;
  }

  .swiper-pagination-bullet {
    background: #ffffff;
    opacity: 0.5;
    &-active {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export default LuxMundiHero;

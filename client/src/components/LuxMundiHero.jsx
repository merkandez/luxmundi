import styled from "styled-components";
import Slider from "react-slick";
import { ButtonGroup } from "../components/ButtonGroup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function LuxMundiHero() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

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
        <Slider {...sliderSettings}>
          <div>
            <Image
              src="https://via.placeholder.com/800x400?text=Image+1"
              alt="Lux Mundi Image 1"
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/800x400?text=Image+2"
              alt="Lux Mundi Image 2"
            />
          </div>
          <div>
            <Image
              src="https://via.placeholder.com/800x400?text=Image+3"
              alt="Lux Mundi Image 3"
            />
          </div>
        </Slider>
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

  .slick-slide img {
    width: 100%;
    border-radius: 8px;
  }

  .slick-dots li button:before {
    color: #ffffff; // Dots color
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export default LuxMundiHero;

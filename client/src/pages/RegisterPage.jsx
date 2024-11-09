import styled from "styled-components";
import SocialButton from "../components/SocialButton";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Camera } from "lucide-react";
import { theme } from "../styles/theme";
import { Button } from "../styles/components";

const socialButtons = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/a86aac696dbf1b3069ef825e1b42fd84c2ed563a2107c05440d6ac47931b1cbb?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Continue with Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/dd40f00dc6db3c0364106f8aa8f7a7ccce9226f67ec57e59b892dba3a52f6da7?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Continue with Apple",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/582ae3bba05c84d1bd07d50c1deb2c9f18f000a037f291245497f928ee54dfd9?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Continue with Google",
  },
];

function RegisterPage() {
  return (
    <PageContainer>
      <LeftSection>
        <ContentWrapper>
          <LogoContainer>
            <Logo to="/">
              <Camera size={32} color="#fff" />
              <LogoText>LUX MUNDI</LogoText>
            </Logo>
          </LogoContainer>

          <SignUpContent>
            <Title>Create Account</Title>
            <Description>Join our photography community</Description>

            <SocialButtonsContainer>
              {socialButtons.map((button, index) => (
                <SocialButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                />
              ))}
            </SocialButtonsContainer>

            <Divider>
              <DividerLine />
              <DividerText>or</DividerText>
              <DividerLine />
            </Divider>

            <EmailButton>Continue with Email</EmailButton>

            <LoginPrompt>
              Already have an account? <LoginLink to="/login">Log in</LoginLink>
            </LoginPrompt>
          </SignUpContent>
        </ContentWrapper>
      </LeftSection>

      <RightSection>
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
              <SlideImage
                src="https://source.unsplash.com/random/1200x800/?photography,camera"
                alt="Photography"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideImage
                src="https://source.unsplash.com/random/1200x800/?landscape,nature"
                alt="Landscape"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideImage
                src="https://source.unsplash.com/random/1200x800/?portrait,people"
                alt="Portrait"
              />
            </SwiperSlide>
          </Swiper>
          <Overlay />
        </SliderWrapper>
      </RightSection>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #0a0a0a;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #0a0a0a;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
`;

const LogoContainer = styled.div`
  margin-bottom: 3rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
`;

const LogoText = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const SignUpContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #999;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
  animation: fadeIn 0.5s ease-out;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #333;
`;

const DividerText = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const EmailButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
  background: ${theme.colors.primary};

  &:hover {
    background: ${theme.colors.primaryHover};
  }
`;

const LoginPrompt = styled.p`
  margin-top: 2rem;
  color: #999;
  font-size: 0.9rem;
`;

const LoginLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const RightSection = styled.section`
  flex: 1;
  position: relative;
  min-height: 100vh;

  @media (max-width: 991px) {
    min-height: 50vh;
  }
`;

const SliderWrapper = styled.div`
  position: absolute;
  inset: 0;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background: ${theme.colors.text.tertiary};
    opacity: 0.5;
    transition: ${theme.animation.transition};
  }

  .swiper-pagination-bullet-active {
    background: ${theme.colors.primary};
    opacity: 1;
    width: 24px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(10, 10, 10, 0.8),
    rgba(10, 10, 10, 0.4)
  );
  z-index: 1;
`;

export default RegisterPage;

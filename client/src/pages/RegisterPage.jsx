import styled from "styled-components";
import SocialButton from "../components/SocialButton";
import SliderDot from "../components/SliderDot";

const socialButtons = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/a86aac696dbf1b3069ef825e1b42fd84c2ed563a2107c05440d6ac47931b1cbb?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Facebook",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/dd40f00dc6db3c0364106f8aa8f7a7ccce9226f67ec57e59b892dba3a52f6da7?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Apple",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/582ae3bba05c84d1bd07d50c1deb2c9f18f000a037f291245497f928ee54dfd9?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Google",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/5d6c0619ab336d21ae9a53e309379cfa751fa2981b48ec84cd19fb4c6ca8fb7f?apiKey=4a6b075cba4d439db44d5a2134fb5890&",
    text: "Use Email",
  },
];

function RegisterPage() {
  return (
    <SignUpContainer>
      <LeftSection>
        <ContentWrapper>
          <LogoContainer>
            <Logo
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/4f650745a1c10c9c636af551ac9e9d5e9c8248ccd131718f5fb4a0b26b05b1bc?apiKey=4a6b075cba4d439db44d5a2134fb5890&"
              alt="Company Logo"
            />
          </LogoContainer>
          <SignUpContent>
            <SignUpHeader>
              <Title>Registrese</Title>
              <SupportingText>Haga parte de nuestra comunidad!</SupportingText>
            </SignUpHeader>
            <ButtonGroup>
              {socialButtons.map((button, index) => (
                <SocialButton
                  key={index}
                  icon={button.icon}
                  text={button.text}
                />
              ))}
              <LoginPrompt>
                Already have an account <span className="gray-text">?</span>{" "}
                <span className="dark-text">Log In</span>
              </LoginPrompt>
            </ButtonGroup>
          </SignUpContent>
        </ContentWrapper>
        <Footer />
      </LeftSection>
      <RightSection>
        <ArtworkContainer>
          <Artwork />
          <SliderDotsContainer>
            {[...Array(4)].map((_, index) => (
              <SliderDot key={index} active={index === 0} />
            ))}
          </SliderDotsContainer>
        </ArtworkContainer>
      </RightSection>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.main`
  background: var(--Base-White, #fff);
  box-shadow: 0 20px 32px -4px rgba(0, 0, 0, 0.1),
    0 8px 8px -4px rgba(16, 24, 40, 0.03);
  display: flex;
  width: 1200px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const LeftSection = styled.section`
  background-color: #2c2c2c;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  flex-basis: 0%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 32px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 360px;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

const Logo = styled.img`
  aspect-ratio: 1.59;
  object-fit: contain;
  object-position: center;
  width: 51px;
`;

const SignUpContent = styled.div`
  display: flex;
  margin-top: 88px;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SignUpHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: var(--White, #fff);
  justify-content: flex-start;
`;

const Title = styled.h1`
  letter-spacing: -0.96px;
  font: var(--sds-typography-title-page-font-weight)
    var(--sds-typography-title-page-size-base) / 1.2
    var(--sds-typography-title-page-font-family);
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const SupportingText = styled.p`
  margin-top: 20px;
  font: 500 20px Manrope, sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 44px;
  width: 100%;
  flex-direction: column;
  color: var(--Gray-Cool-800, #1d2939);
  justify-content: flex-start;
  font: 700 18px Manrope, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LoginPrompt = styled.p`
  align-self: stretch;
  flex: 1;
  margin-top: 12px;
  width: 100%;
  padding-top: 24px;
  gap: 10px;
  font-size: 16px;
  color: var(--Gray-true-800, #292929);
  font-weight: 600;

  .gray-text {
    color: rgba(115, 115, 115, 1);
  }

  .dark-text {
    color: rgba(41, 41, 41, 1);
  }
`;

const Footer = styled.footer`
  display: flex;
  min-height: 96px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const RightSection = styled.section`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  width: 653px;
  padding: 211px 0;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 100px 0;
  }
`;

const ArtworkContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const Artwork = styled.div`
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  min-height: 384px;
  width: 512px;
  max-width: 100%;
`;

const SliderDotsContainer = styled.div`
  display: flex;
  margin-top: 64px;
  align-items: center;
  gap: 20px;
  justify-content: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default RegisterPage;

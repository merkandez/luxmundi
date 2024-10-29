import styled from "styled-components";

const LogoWrapper = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  margin: auto 0;
`;

const LogoImage = styled.img`
  aspect-ratio: 0.69;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage
        src="https://cdn.builder.io/api/v1/image/assets/4a6b075cba4d439db44d5a2134fb5890/4f5ec0c47e978737e43c29258abd006f66c9cb9fb2d933cce91751060a91e067?apiKey=4a6b075cba4d439db44d5a2134fb5890&"
        alt="Company Logo"
        loading="lazy"
      />
    </LogoWrapper>
  );
}

export default Logo;

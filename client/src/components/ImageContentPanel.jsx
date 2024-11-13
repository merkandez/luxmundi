import React from 'react';
import styled from 'styled-components';

const ImageContentPanel = ({ imageUrl }) => (
  <StyledPanel>
    <StyledImage src={imageUrl} alt='Imagen del Post' loading='lazy' />
  </StyledPanel>
);

const StyledPanel = styled.section`
  background-color: rgba(30, 30, 30, 1);
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  padding: 114px 64px;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 100px 20px;
  }
`;

const StyledImage = styled.img`
  aspect-ratio: 1.54;
  object-fit: contain;
  width: 50%; /* La imagen ocupa el 50% del ancho */
  min-width: 240px;
  max-width: 500px;
  flex-shrink: 0;
  margin: auto;

  @media (max-width: 991px) {
    width: 100%; /* En pantallas más pequeñas, la imagen ocupa el 100% */
  }
`;
export default ImageContentPanel;

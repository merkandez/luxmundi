// ImageContentPanel.jsx
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
  justify-content: center;
  padding: 60px 0;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default ImageContentPanel;

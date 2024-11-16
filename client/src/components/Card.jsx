import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ title, content, imageUrl }) => (
  <CardContainer>
    <ImageContainer>
      <CardImage src={imageUrl} alt={title} />
      <Overlay />
    </ImageContainer>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{content}</CardDescription>
    </CardContent>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

// Estilos
const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  max-width: 300px;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.5;
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; /* Define un contenedor flexible */
  -webkit-line-clamp: 3; /* Limita el texto a 3 líneas */
  -webkit-box-orient: vertical; /* Orienta el texto verticalmente */
`;

export default Card;

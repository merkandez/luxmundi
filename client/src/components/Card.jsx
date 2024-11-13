import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = ({ title, content, imageUrl }) => (
  <CardContainer>
    <Image src={imageUrl} alt={title} />
    <ContentWrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </ContentWrapper>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const CardContainer = styled.div`
  background-color: #333;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  cursor: pointer;
  width: 100%; /* Ajusta la tarjeta para que ocupe el espacio de la cuadrícula */

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px; /* Altura fija para mantener las imágenes uniformes */
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Content = styled.p`
  margin: 0;
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.4;
  height: 48px; /* Limita el tamaño del texto visible */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default Card;

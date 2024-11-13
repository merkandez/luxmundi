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
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  color: #fff;
`;

const Content = styled.p`
  margin: 0;
  color: #aaa;
`;

export default Card;

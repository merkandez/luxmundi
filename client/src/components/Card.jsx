import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Star } from "lucide-react";

const Card = ({ title, content, imageUrl, likes }) => (
  <CardContainer>
    <ImageContainer>
      <CardImage src={imageUrl} alt={title} />
      <Overlay />
    </ImageContainer>
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{content}</CardDescription>
      <CardFooter>
        <Star size={20} fill="#29C9A9" stroke="#29C9A9" strokeWidth={2} />
        <LikesCount>{likes}</LikesCount>
      </CardFooter>
    </CardContent>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired, // Prop adicional para los favoritos
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
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const LikesCount = styled.span`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
`;

export default Card;

import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Card = ({ id, title, content }) => {
  //const navigate = useNavigate();
  
  //NOS LLEVA A LA PÁG. DE ARTICLEPAGE
  //const handleClick = () => {
    //navigate(`/articlePage/${id}`);
  //};

  return (
  <CardWrapper  >
    <Link to={`/ArticlePage/${id}`}>
    <CardImage />
    <CardContent>
      <h3>{title}</h3>
      <p>{content}</p>
    </CardContent>
    </Link>
  </CardWrapper>
);
}

Card.propTypes = {
  id: PropTypes.string.isRequired,   // Aseguramos que 'id' sea un string requerido
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const CardWrapper = styled.div`
  background-color: #111111;
  border-radius: 4px;
  padding: 16px;
  text-align: left;
  color: #ffffff;
  border: 1px solid #222;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #333;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1);
    }
  }

  &:active {
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #ffffff, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
`;

const CardImage = styled.div`
  background-color: #222;
  width: 100%;
  height: 200px;
  border-radius: 2px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.02);
  }
`;

const CardContent = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
    font-weight: 500;
    transition: color 0.3s ease;

    ${CardWrapper}:hover & {
      color: #fff;
    }
  }

  p {
    font-size: 0.9rem;
    color: #999;
    line-height: 1.5;
  }
`;

export default Card;

import React from 'react'
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Card = ({ id, title, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articlePage/${id}`); // Ajusta la ruta según lo que necesites
  };
    
  return (
    <CardWrapper onClick={handleClick}>
      <CardImage />
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
      </CardContent>
    </CardWrapper>
  )
  };
  
  Card.propTypes = {
    
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };
  
  export default Card;
  
  const CardWrapper = styled.div`
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 16px;
    text-align: left;
    color: #ffffff;
    flex-direction: column; @media (max-width: 768px) { 
    padding: 12px; }
  `;
  
  const CardImage = styled.div`
    background-color: #444444;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    margin-bottom: 12px;
  `;
  
  const CardContent = styled.div`
    h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
  
    p {
      font-size: 0.9rem;
      color: #cccccc;
    }
  `;
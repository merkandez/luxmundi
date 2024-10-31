import React from 'react';
import styled from 'styled-components'



const Card = ({ title, description, image }) => {
    return (
        <CardContainer>
        <SubCard>
        <ImageContainer>
                  <img src={image} alt={title} />
                </ImageContainer>
          <TextContainer>
          <Title> Nueva Zelandia </Title> 
          <Description> Body text for whatever you'd like to say. 
            Add main takeaway points, quotes, anecdotes, or even a very very short story. </Description>
          </TextContainer>
        </SubCard>
        <SubCard>
          <img style={{width: 153, height: 165, background: 'linear-gradient(0deg, #E3E3E3 0%, #E3E3E3 100%)'}} src="https://via.placeholder.com/160x160" />
    
          <TextContainer>
          <Title> Nueva Zelandia </Title> 
          <Description> Body text for whatever you'd like to say. 
            Add main takeaway points, quotes, anecdotes, or even a very very short story. </Description>
          </TextContainer>
        </SubCard>
        
      </CardContainer>

      
    );
  };

export default Card;

// Estilos de los componentes con styled-components

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid #333; 
  border-radius: 8px; 
  background-color: #1e1e1e; 
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SubCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`;

const ImageContainer = styled.div`
  width: 153px;
  height: 165px;
  background: linear-gradient(0deg, #E3E3E3 0%, #E3E3E3 100%);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  text-align: left;
  width: 100%;
  padding: 0.5rem 0;
`;

const Title = styled.h3`
  margin: 0.5rem 0 0;
  font-size: 1.2em;
  color: #f5a623;
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9em;
  line-height: 1.4;
  text-align:left;
  color: red;
`;
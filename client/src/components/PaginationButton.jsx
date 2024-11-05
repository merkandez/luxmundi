import React from "react";
import styled from "styled-components";

const PaginationButton = ({ direction }) => {
    const isNext = direction === "next";
    const text = isNext ? "Next" : "Previous";
    const iconSrc = isNext 
    ? "https://cdn.builder.io/api/v1/image/assets/TEMP/7a6a77f8b076a89c1e7d95b764542f03361eea155d2ddd72ce9f6819a806bb32?placeholderIfAbsent=true&apiKey=f7a9776dbe254160beeaee7b49651926" 
    : "https://cdn.builder.io/api/v1/image/assets/TEMP/98ecd79d67cd6f894db50f4449c3bb503cbb4595dd79dc32350c0e5e7eb2405c?placeholderIfAbsent=true&apiKey=f7a9776dbe254160beeaee7b49651926";
  
    return (
      <ButtonWrapper>
        {!isNext && <ButtonIcon src={iconSrc} alt="" />}
        <ButtonText>{text}</ButtonText>
        {isNext && <ButtonIcon src={iconSrc} alt="" />}
      </ButtonWrapper>
    );
  };

  const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  justify-content: center;
  padding: 8px 12px;
  background: none;
  
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Fondo al pasar el mouse */
  }
`;


const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ButtonText = styled.span`
  align-self: stretch;
`;

export default PaginationButton; 
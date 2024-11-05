import React from "react";
import styled from "styled-components";

const PaginationList = () => {
    const pages = [1, 2, 3];
  
    return (
      <ListWrapper>
        {pages.map((page) => (
          <PageButton key={page} isActive={page === 1}>
            {page}
          </PageButton>
        ))}
        <PageGap aria-hidden="true">...</PageGap>
      </ListWrapper>
    );
  };

  const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
 
`;

const PageButton = styled.button`
  
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.isActive ? "rgba(245, 245, 245, 1)" : "transparent"};
  color: ${(props) => props.isActive ? "var(--sds-color-text-brand-on-brand)" : "inherit"};
  border: ${(props) => (props.isActive ? "none" : "1px solid #fff")}; /* Borde blanco */
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Fondo al pasar el mouse */
  }
`;


const PageGap = styled.span`
  
  color: white;
  padding: 8px 16px;
  font-weight: bold; 
`;
export default PaginationList;  
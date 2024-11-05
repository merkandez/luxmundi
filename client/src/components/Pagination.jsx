import React from "react";
import styled from "styled-components";
import PaginationButton from "./PaginationButton";
import PaginationList from "./PaginationList";

const Pagination = () => {
  return (
    
      <PaginationWrapper>
        <PaginationButton direction="previous" />
        <PaginationList />
        <PaginationButton direction="next" />
      </PaginationWrapper>
    
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Centra el contenedor en la página */
  gap: 8px;
  padding: 16px;
  color: var(--sds-color-text-default-default);
  margin-top: 40px; /* Ajusta este valor según prefieras */
  font: var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium) / 1 var(--sds-typography-body-font-family);
`;

export default Pagination;
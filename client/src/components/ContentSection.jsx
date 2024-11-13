// ContentSection.jsx
import React from "react";
import styled from "styled-components";

const ContentSection = ({ content }) => {
  if (!content) {
    return <StyledContentWrapper>No hay contenido disponible</StyledContentWrapper>;
  }

  const { heading, subheading, text, additionalText } = content;

  return (
    <StyledContentWrapper>
      <StyledHeaderWrapper>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSubheading>{subheading}</StyledSubheading>
      </StyledHeaderWrapper>
      <StyledText>{text}</StyledText>
      {additionalText && <StyledText>{additionalText}</StyledText>}
    </StyledContentWrapper>
  );
};

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StyledHeaderWrapper = styled.header`
  margin-bottom: 16px;
`;

const StyledHeading = styled.h2`
  color: white;
  font-size: 2rem;
  margin: 0;
`;

const StyledSubheading = styled.h3`
  color: #cccccc;
  margin-top: 8px;
  font-size: 1rem;
`;

const StyledText = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 16px;
`;

export default ContentSection;

import React from "react";
import styled from "styled-components";

const ContentSection = ({ content }) => {
  const { heading, subheading, text, additionalText } = content;

  return (
    <StyledContentWrapper>
      <StyledHeaderWrapper>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSubheading>{subheading}</StyledSubheading>
      </StyledHeaderWrapper>
      <StyledText>{text}</StyledText>
      <StyledText>{additionalText}</StyledText>
    </StyledContentWrapper>
  );
};

const StyledContentWrapper = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 300px;
  min-height: 351px;
  flex-direction: column;
  justify-content: flex-start;
  width: 484px;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledHeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  white-space: nowrap;
  line-height: 1.2;
  justify-content: flex-start;

  @media (max-width: 991px) {
    max-width: 100%;
    white-space: initial;
  }
`;

const StyledHeading = styled.h2`
  color: var(--sds-color-text-default-default);
  letter-spacing: -0.48px;
  font: var(--sds-typography-heading-font-weight) var(--sds-typography-heading-size-base) var(--sds-typography-heading-font-family);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledSubheading = styled.h3`
  color: var(--sds-color-text-default-secondary);
  margin-top: 8px;
  font: var(--sds-typography-subheading-font-weight) var(--sds-typography-subheading-size-medium) var(--sds-typography-subheading-font-family);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const StyledText = styled.p`
  flex: 1;
  margin-top: 24px;
  width: 100%;
  color: var(--sds-color-text-default-default);
  font: var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium) var(--sds-typography-body-font-family);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ContentSection;
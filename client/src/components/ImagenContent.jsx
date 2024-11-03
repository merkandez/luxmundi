import React from "react";
import styled from "styled-components";
import ContentSection from "./ContentSection";

const ImageContentPanel = () => {
  const contentData = [
    {
      heading: "Heading",
      subheading: "Subheading",
      text: "Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:",
      additionalText: "Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur."
    }
  ];

  return (
    <StyledPanel>
      <ContentSection content={contentData[0]} />
      <StyledImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3e11dd47b6c22de2b3e427fd28b30c993c73758ad7b5206385e501aea622?placeholderIfAbsent=true&apiKey=f7a9776dbe254160beeaee7b49651926" alt="Content illustration" />
    </StyledPanel>
  );
};

const StyledPanel = styled.section`
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  gap: 40px 48px;
  line-height: 22px;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 114px 64px;

  @media (max-width: 991px) {
    padding: 100px 20px;
  }
`;

const StyledImage = styled.img`
  aspect-ratio: 1.54;
  object-fit: contain;
  object-position: center;
  width: 100%;
  align-self: stretch;
  min-width: 240px;
  min-height: 350px;
  flex: 1;
  flex-basis: 0%;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default ImageContentPanel;
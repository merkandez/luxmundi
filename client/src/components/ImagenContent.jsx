import React from "react";
import styled from "styled-components";
import ContentSection from "./ContentSection";

const ImageContentPanel = ({ post }) => {
  const contentData = {
    heading: post.title,
    subheading: "",
    text: post.content,
    additionalText: post.content
  };

  return (
    <StyledPanel>
      <ContentSection content={contentData} />
      <StyledImage loading="lazy" src={post.image || "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ff3e11dd47b6c22de2b3e427fd28b30c993c73758ad7b5206385e501aea622?placeholderIfAbsent=true&apiKey=f7a9776dbe254160beeaee7b49651926"} alt={post.title} />
    </StyledPanel>
  );
};

const StyledPanel = styled.section`
  background-color: rgba(30, 30, 30, 1);
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  padding: 114px 64px;

  @media (max-width: 991px) {
    flex-direction: column;
    padding: 100px 20px;
  }
`;

const StyledImage = styled.img`
  aspect-ratio: 1.54;
  object-fit: contain;
  width: 50%;
  min-width: 240px;
  max-width: 500px;
  flex-shrink: 0;
  margin: auto;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export default ImageContentPanel;
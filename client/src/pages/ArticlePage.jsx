import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ImagenContent from '../components/ImagenContent.jsx';
import ContentSection from '../components/ContentSection.jsx';

const DetailPage = () => {
    const contentData = {
      heading: "",
      subheading: "",
      text: "",
      additionalText: ""
    };
  
    return (
      <>
        <HeroSection />
        <ImagenContent />
        <ContentSection content={contentData} />
      </>
    );
  };
  
  export default DetailPage;
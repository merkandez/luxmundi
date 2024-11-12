import React from 'react';

import HeroSection from '../components/HeroSection';
import ImagenContent from '../components/ImagenContent';
import ContentSection from '../components/ContentSection';
import Pagination from "../components/Pagination"; //Llamar solo a pagination


const ArticlePage = () => {
    
    return (
      <>
        <HeroSection />
        <ImagenContent />
        <ContentSection/>
        <Pagination /> {/* Llamar solo a Pagination */}
      </>
    );
  };
  
  export default ArticlePage;
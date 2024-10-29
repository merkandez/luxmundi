import React from "react";
import NavigationMenu from "../components/NavigationMenu"; // Ensure this path is correct
import HeroContent from "../components/HeroContent"; // Ensure this path is correct

const HomePage = () => {
  return (
    <div>
      <NavigationMenu />
      <HeroContent />
      {/* Other components or content for the HomePage */}
    </div>
  );
};

export default HomePage;

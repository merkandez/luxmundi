import Header from "../components/Header";
import { ButtonGroup } from "../components/ButtonGroup";
import LuxMundiHero from "../components/LuxMundiHero";
import HeroContent from "../components/HeroContent";

function HomePage() {
  return (
    <div>
      <Header />
      <LuxMundiHero />
      <ButtonGroup />
      <HeroContent title="Lux Mundi" subtitle="algo muy guay aqui" />
    </div>
  );
}

export default HomePage;

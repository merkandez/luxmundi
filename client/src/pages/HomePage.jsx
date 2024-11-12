import styled from 'styled-components';
import LuxMundiHero from '../components/LuxMundiHero';
import ExploreSection from '../components/ExploreSection';
import React from 'react';
import LogoutButton from '../components/LogoutButton';

const cardData = [
  {
    title: 'Machu Pichu',
    description:
      'Embárcate en un viaje a la antigua ciudad inca, ubicada en lo alto de las montañas de los Andes, y maravíllate con sus impresionantes ruinas y vistas.',
  },
  {
    title: 'Nueva Zelanda',
    description:
      'Explora los paisajes de ensueño de Nueva Zelanda, donde montañas, lagos y playas se combinan en un país lleno de aventuras al aire libre.',
  },
  {
    title: 'Gran Muralla China',
    description:
      "Recorre kilómetros de historia en la Gran Muralla China, una construcción milenaria que serpentea a través de montañas y paisajes impresionantes.",
  },
  {
    title: 'Torre Eiffel',
    description:
      'Siente la magia de París al pie de la icónica Torre Eiffel, un símbolo de amor y arte que ofrece vistas espectaculares de la Ciudad de la Luz.',
  },
  {
    title: 'Gran Cañón',
    description:
      'Admira la inmensidad del Gran Cañón en Arizona, una maravilla natural esculpida por el río Colorado y uno de los paisajes más impresionantes del mundo.',
  },
  {
    title: 'Casa de Ópera de Sydney',
    description:
      'Admira la emblemática Opera House de Sídney, un centro cultural único por su arquitectura vanguardista y su ubicación en el puerto australiano.',
  },
  // Adding more cards to test pagination
  {
    title: 'Santorini',
    description:
      'Disfruta de las famosas puestas de sol y las icónicas casas blancas de esta isla griega, rodeada de aguas cristalinas y paisajes de ensueño.',
  },
  {
    title: 'Monte Fuji',
    description:
      "Contempla el majestuoso Monte Fuji, un volcán sagrado de Japón que ofrece un paisaje espectacular, especialmente en primavera y otoño.",
  },
  {
    title: 'Venecia',
    description: 'Déjate llevar por el encanto romántico de Venecia, donde canales, góndolas y arquitectura histórica crean una atmósfera única en el mundo.',
  },
  {
    title: 'Petra',
    description: 'Admira la ciudad tallada en roca de Petra, un tesoro arqueológico en Jordania, y explora sus túneles secretos y estructuras monumentales.',
  },
  {
    title: 'Taj Mahal',
    description: 'Descubre el símbolo del amor eterno en Agra, India. El Taj Mahal, con su majestuosa arquitectura de mármol blanco y sus jardines, es una de las Siete Maravillas del Mundo Moderno.',
  },
  {
    title: 'Gran Barrera de Coral',
    description: "Sumérgete en el mundo submarino de la Gran Barrera de Coral, en Australia, el sistema de arrecifes más grande del planeta y hogar de una biodiversidad increíble.",
  },
];

function HomePage() {
  return (
    <HomeWrapper>
      <LuxMundiHero />
      <LogoutButton />
      <ExploreSection cards={cardData} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  background-color: #0a0a0a;
  min-height: 100vh;
`;

export default HomePage;

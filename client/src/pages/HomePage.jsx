import React from 'react';
import CardList from '../components/CardList';



const HomePage = () => {
  const posts = [ 
    { title: 'Machu Picchu', description: 'Una breve descripción de Machu Picchu' },
    { title: 'Nueva Zelanda', description: 'Explora la belleza de Nueva Zelanda' }, // Añade más posts aquí... ];

  ];
  
return (
    <div>
      <h1>Home Page</h1>
      <CardList/> {/* Mostrar la tarjeta en la página de inicio */}
      
      
    </div>
    
 );
};
export default HomePage;


import React from 'react';
import './Home.css'

import Fondo from '../../assets/mediterráneo.jpg';
const Home = () => {
  return (
    <div className="home-container">
      <img src={Fondo} alt="Mediterráneo" />

      <div className="content">
        <h1>¡Bienvenido a Nuestro Restaurante Mediterráneo!</h1>
        <p>
          Descubre la deliciosa y saludable comida mediterránea, llena de sabores frescos y
          auténticos ingredientes. Nuestro restaurante te ofrece una experiencia gastronómica única
          que te transportará directamente a las costas del Mediterráneo.
        </p>

        <form className="search-form">
          <input type="text" placeholder="Introduce tu ciudad..." />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default Home;

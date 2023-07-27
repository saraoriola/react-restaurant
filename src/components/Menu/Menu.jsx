import React from 'react';
import './Menu.css'; // Importa el archivo CSS

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="card">
        <h2>Almuerzo</h2>
        <p>
          ¡Disfruta de nuestros deliciosos almuerzos con una selección de platos mediterráneos
          preparados con ingredientes frescos y sabrosos!
        </p>
      </div>

      <div className="card">
        <h2>Comida</h2>
        <p>
          Nuestra comida ofrece una variedad de opciones saludables y deliciosas que te
          transportarán a las costas del Mediterráneo en cada bocado.
        </p>
      </div>

      <div className="card">
        <h2>Cena</h2>
        <p>
          Experimenta la magia de la cena mediterránea con nuestra selección de platos
          gourmet y opciones vegetarianas para satisfacer todos los paladares.
        </p>
      </div>

      <div className="card">
        <h2>Tardeo</h2>
        <p>
          Relájate y disfruta de nuestra selección especial de bebidas y tapas durante la
          tardeo en los fines de semana.
        </p>
      </div>

      <div className="card">
        <h2>Cena (Fin de Semana)</h2>
        <p>
          Nuestra cena de fin de semana ofrece platos excepcionales y una experiencia
          culinaria inolvidable.
        </p>
      </div>

      <div className="card">
        <h2>Fiesta</h2>
        <p>
          ¡Únete a nuestras noches de fiesta con música en vivo y cócteles especiales para
          una velada inolvidable!
        </p>
      </div>
    </div>
  );
};

export default Menu;

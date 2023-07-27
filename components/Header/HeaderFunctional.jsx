import React from 'react';

const HeaderFunctional= () => {
    return (
      <nav className="navbar">
        <h1 className="logo">El Rincón Gastronómico</h1>
        <ul className="menu">
          <li className="menuItem">Inicio</li>
          <li className="menuItem">Menú</li>
          <li className="menuItem">Reservas</li>
          <li className="menuItem">Contacto</li>
        </ul>
      </nav>
    );
  };

export default HeaderFunctional;

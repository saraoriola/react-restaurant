import React from 'react';
import './HeaderFunctional.css';

const HeaderFunctional = () => {
  return (
    <div>
      <h1 className="logo">The Gastronomic Corner</h1>
      <div className="menu">
        <span className="menuItem">Home</span>
        <span className="menuItem">Menu</span>
        <span className="menuItem">Reservations</span>
        <span className="menuItem">Contact</span>
      </div>
    </div>
  );
};

export default HeaderFunctional;

import React from 'react';
import './HomeFunctional.css';

const HomeFunctional = ({ dishes }) => (
  <div className="card-container">
    {dishes.map((dish) => (
      <div key={dish.id} className="card">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <p>Price: {dish.price}</p>
      </div>
    ))}
  </div>
);

export default HomeFunctional;

import React from 'react'

 const HomeFunctional = (props) => {
    const dishes = props.dishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.name}</h3>
          <p>Description: {dish.description}</p>
          <p>Price: {dish.price}</p>
        </div>
      ));
  return (
    <div>{dishes}</div>
  )
}
export default HomeFunctional;
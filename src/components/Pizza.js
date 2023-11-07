import React from 'react'
import './../index.css'

// child components
function pizza (props) {
  console.log(props)
  return (
    <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div className="">

        <h3>{props.pizzaObj.name}</h3>
         <p>{props.pizzaObj.ingredients}</p>
         <span>{props.pizzaObj.price}</span>
         </div>
    </li>
  )
}

export default pizza

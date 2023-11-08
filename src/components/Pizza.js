import React from 'react'
import './../index.css'

// child components
// function pizza (props) {

// props desctructuring
function Pizza ({ pizzaObj }) {
  // console.log(pizzaObj)

  // conditional rendering with multiple returns
  if (pizzaObj.soldOut) return null
  return (
    <li className="pizza">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div className="">

        <h3>{pizzaObj.name}</h3>
         <p>{pizzaObj.ingredients}</p>
         <span>{pizzaObj.price}</span>
         </div>
    </li>
  )
}

export default Pizza

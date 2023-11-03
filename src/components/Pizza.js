import React from 'react'
import './../index.css'

// child components
function pizza (props) {
  console.log(props)
  return (
    <div className="pizza">
        <img src={props.photoName} alt={props.name} />
        <div className="">

        <h3>{props.name}</h3>
         <p>{props.ingredients}</p>
         <span>{props.price}</span>
        </div>
    </div>
  )
}

export default pizza

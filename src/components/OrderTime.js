/* eslint-disable react/prop-types */
import React from 'react'

// props destructuring
function OrderTime ({ closingHour }) {
  return (
    <div className="order">
    <p>
      We are currently open until {closingHour}:00pm. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
      </div>
  )
}

export default OrderTime

import React from 'react'

function OpenHours ({ openingHour }) {
  return (
    <div className="order">
    <p>
      We are currently closed until {openingHour}:00am. Please order for Pizza online.
      </p>
      <button className="btn">Order</button>
      </div>
  )
}

export default OpenHours

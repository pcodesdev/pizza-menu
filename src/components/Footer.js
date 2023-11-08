import React from 'react'
import './../index.css'
import OrderTime from './OrderTime'
import OpenHours from './OpenHours'

function Footer () {
  // use of javascript in react demonstration purposes
  const currentYear = new Date().getFullYear()
  const openStatus = new Date().getHours()
  const openingTime = 8
  const closingTime = 22
  const isOpen = openStatus >= openingTime && openStatus <= closingTime
  // console.log(isOpen)

  // const message = openStatus >= openingTime && openStatus <= closingTime ? 'We are currently open' : 'We are currently closed'

  // if (openStatus >= openingTime && openStatus <= closingTime) {
  //   alert('We are currently open')
  // } else {
  //   alert('We are currently closed')
  // }

  return (
    // conditional rendering using ternary operator
    <footer className="footer">{currentYear} {isOpen
      ? (
    <OrderTime closingHour={closingTime}
    />
        )
      : (
      <OpenHours openingHour={openingTime}/>
        )}
    </footer>
  )
}

export default Footer

import React from 'react'

function Footer () {
  // use of javascript in react demonstration purposes
  const currentYear = new Date().getFullYear()
  const openStatus = new Date().getHours()
  const openingTime = 8
  const closingTime = 22
  const isOpen = openStatus >= openingTime && openStatus <= closingTime
  console.log(isOpen)

  // if (openStatus >= openingTime && openStatus <= closingTime) {
  //   alert('We are currently open')
  // } else {
  //   alert('We are currently closed')
  // }

  return (
    <footer>{currentYear} We're currently open</footer>
  )
}

export default Footer

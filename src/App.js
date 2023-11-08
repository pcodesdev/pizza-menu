import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import './index.css'

function App () {
  return (
    <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  )
}

export default App

// Next: Setting Classes and Text Conditionally

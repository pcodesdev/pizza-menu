import React from 'react'
import Pizza from './Pizza'
import './../index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false
  }
]
// parent component
function Menu () {
  return (
    <main className="menu">
    <h2>Our Menu</h2>

<ul className="pizzas">
    {pizzaData.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name}/>)}
</ul>

    {/* <Pizza
    name="Focaccia"
    ingredients="Bread with italian olive oil and rosemary"
    photoName="/pizzas/focaccia.jpg"
    price={6}
    />
    <Pizza
    name="Pizza Margherita"
    ingredients="Tomato and mozarella"
    photoName="pizzas/margherita.jpg"
    price={10}
    /> */}
    </main>
  )
}

export default Menu

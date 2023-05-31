import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
      <img src={require('./assets/Logo.svg').default} alt="little lemon" height={70} width={140} />
      <ul className='list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><a href="/">Order</a></li>
        <li><a href="/">Login</a></li>

      </ul>
    </div>
  )
}

export default Nav

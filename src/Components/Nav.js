import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className='navbar'>
      <img src={require('./assets/Logo.svg').default} alt="little lemon" height={70} width={140} />
      <ul className='list'>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Reservation</a></li>
        <li><a href="/">Order</a></li>
        <li><a href="/">Login</a></li>

      </ul>
    </div>
  )
}

export default Nav

import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='headerContainer'>
      <div className='text'>
      <h1>Little Lemon</h1>
      <p>We are family owner restorant, Focused on traditional recipes with a modren twist</p>
      <button>Reserve a Table</button>
      </div>
      <div className='image'>
      <img src={require('./assets/restauranfood.jpg')} alt="banner"  height={300} width={300}/>
      </div>
    </div>
  )
}

export default Header

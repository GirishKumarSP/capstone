import React from 'react'
import "./Main.css"

function Main() {
  return (
    <>
    <h2>This Week specials!</h2>
    <div className='container'>
      <div className='card1'>
        <img src={require('./assets/greek salad.jpg')} alt="logo" height={150} width={300} />
        <h4>food1</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam incidunt expedita molestias quos.</p>
        <h5>Order a delivery</h5>
      </div>

      <div className='card1'>
        <img src={require('./assets/greek salad.jpg')} alt="logo" height={150} width={300} />
        <h4>food2</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam incidunt expedita molestias quos.</p>
        <h5>Order a delivery</h5>
      </div>

      <div className='card1'>
        <img src={require('./assets/greek salad.jpg')} alt="logo" height={150} width={300} />
        <h4>food3</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam incidunt expedita molestias quos.</p>
        <h5>Order a delivery</h5>
      </div>
    </div>
    </>
  )
}

export default Main

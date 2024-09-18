import React from 'react'
import flipkart from '../images/flipkart.png'
import amazon from '../images/amazon.png'
import Shoe from '../images/shoe_image.png'

function Hero() {
  return (
    <main className='hero container'>
      <div className='hero-contant'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
          HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE
          HERE TO HELP YOU WITH OUR <br />
          SHOES.
        </p>
        <div className='hero-btn'>
          <button>Shop Now</button>
          <button className='btn'>Category</button>
        </div>
        <div className='Shopping'>
          <p>Also Available On</p>
          <div className='icons'>
            <img src={flipkart} alt='' />
            <img src={amazon} alt='' />
          </div>
        </div>
      </div>
      <div className='hero-img'>
        <img src={Shoe} alt='' />
      </div>
    </main>
  )
}

export default Hero

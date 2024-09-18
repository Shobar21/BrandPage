import React from 'react'
import logo from '../images/brand_logo.png'

function Navigation() {
  return (
    <nav className='container'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <ul>
        <li href='#'>Manu</li>
        <li href='#'>Location</li>
        <li href='#'>Contact</li>
        <li href='#'>About</li>
      </ul>
      <button>Login</button>
    </nav>
  )
}

export default Navigation

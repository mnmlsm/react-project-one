import React from 'react'
import Logo from '../logo.svg'

function Navbar() {
  return (
      <nav>
          <img src={Logo} alt="Logo" className='App-logo'/>
          <h3>React Facts</h3>
          <h4>React Course - Project 1</h4>
      </nav>
  )
}

export default Navbar
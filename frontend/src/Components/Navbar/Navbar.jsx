import React from 'react'
import './Navbar.css'
import trovecar_logo from '../Assets/trovecars-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={trovecar_logo} alt="" />
      </div>
    </div>
  )
}

export default Navbar

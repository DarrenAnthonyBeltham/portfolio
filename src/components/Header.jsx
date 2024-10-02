import React from 'react'
import logo from '../image/Logo.png'


const Header = () => {
  return (
    <div className="navbar flex justify-between items-center px-8 py-4 bg-[#4A6857]">
      <div className="flex-1">
        <img src={logo} alt="Logo" className="logo h-8" />
      </div>
      
      <ul className="flex space-x-8 text-[#F1EBE1] flex-1 justify-center">
        <li>
          <a className="navbarfont text-lg font-bold hover:text-black transition-colors font-spacemono" href="#">About</a>
        </li>
        
        <li>
          <a className="navbarfont text-lg font-bold hover:text-black transition-colors font-spacemono" href="#">Portfolio</a>
        </li>
        
        <li>
          <a className="navbarfont text-lg font-bold hover:text-black transition-colors font-spacemono" href="#">Contact</a>
        </li>
      </ul>
      <div className="flex-1"></div>
    </div>
  )
}

export default Header

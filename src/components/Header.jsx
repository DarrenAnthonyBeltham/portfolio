import React from 'react';
import Logo from '../image/Logo.png'

export default function Header() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="bg-[#4A6857] text-white flex items-center justify-between px-6 py-4 font-spacemono">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-12 h-12 mr-4" /> 
      </div>

      <nav className="flex-grow">
        <ul className="flex justify-center space-x-6">
          <li>
            <button onClick={() => handleScroll('about')} className="hover:text-[#F1EBE1] font-spacemono font-bold">About</button>
          </li>
          <li>
            <button onClick={() => handleScroll('skill')} className="hover:text-[#F1EBE1] font-spacemono font-bold">Portfolio</button>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className="hover:text-[#F1EBE1] font-spacemono font-bold">Contact</button>
          </li>
        </ul>
      </nav>

      <div className="w-12 h-12"></div> 
    </header>
  );
}

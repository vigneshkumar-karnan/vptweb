import React from 'react'
import './Nav.css'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> Home </a>
      <a href="#about" onClick={()=> setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}>About</a>
      <a href="#services" onClick={()=> setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}>Services</a>
      <a href="#Contact" onClick={()=> setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}>Contact</a>
    </nav>
  )
}

export default Nav
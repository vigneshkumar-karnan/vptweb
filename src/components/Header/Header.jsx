import React from 'react'
import Nav from '../Nav/Nav'
import './Header.css'
import Logo from '../../assets/Logo.png'


const Header = () => {
  return (
    <header>
        <img src={Logo} alt = "iprant logo" className = "v_logo" />
        <Nav></Nav>
    </header>
  )

}

export default Header
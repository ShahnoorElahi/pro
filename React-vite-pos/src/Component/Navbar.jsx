import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li> <Link to="/">HOME </Link></li>
                <li> <Link to="/about">ABOUT </Link></li>
                <li> <Link to="/contact"> CONTACT </Link></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar

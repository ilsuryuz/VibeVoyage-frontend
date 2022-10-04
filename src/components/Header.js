import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  <header className="header">
    <Link to='/'>
      <h1>Vibe Voyage</h1>
    </Link>
    <nav>
      <ul className="navLinks">
        <li><Link to="about">About</Link></li>
        <li><Link to='login'>Login</Link></li>
        <li><Link to='register'>Register</Link></li>
      </ul>
    </nav>
  </header>
}

export default Header
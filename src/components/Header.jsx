import React from 'react'
import { login, logout } from '../services/firebase'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="header">
      <Link to='/'>
        <h1>Vibe Voyage</h1>
      </Link>
      <nav>
        <ul className="navLinks">
          <li><Link to="/about">About</Link></li>
        </ul>
        {
          props.user ?
            <>
              <div>VibeChecked, {props.user.displayName}</div>
              <img src={props.user.photoURL} alt={props.user.displayName} style={{
                height: 35,
                width: 'auto',
                borderRadius: '50%',
                marginRight: 10
              }}></img>
              <div onClick={logout}
                style={{
                  cursor: 'pointer',
                  marginRight: 10
                }}>Logout</div>
            </>
            :
            <div onClick={login}
              style={{
                cursor: 'pointer',
                marginRight: 10
              }}>Login</div>
        }
      </nav>
    </header>


  )

}

export default Header
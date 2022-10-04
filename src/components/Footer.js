import React from 'react'
import { Link } from "react-router-dom"

 const Footer = (props)=> {
    <div className = 'footer'>
        <ul className = 'footerLinks'>
        <Link to="/"><li>Home</li></Link>
        <Link to = "notes"><li>Notes</li></Link>    
        <Link to = "meditation"><li>Meditation</li></Link>
        </ul>
    </div>
    
      
}


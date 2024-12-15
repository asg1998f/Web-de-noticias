import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
     <header className='header'>
        <h1 className='titulo'>Alberto´s library</h1>
        <nav className='navegador'>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/form">Books Form</Link></li>
            <li><Link to="/list">Books</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header
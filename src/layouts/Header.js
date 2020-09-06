import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../img/cataleya-logo.png';

//wszystkie podstrony które będą wyświetlane w nawigacji
const pagesList = [
  { name: "About Us", path: "/", exact: true },
  { name: "Our Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
]


const Header = () => {

  const navigation = pagesList.map(page => (
    <li key={page.name}>
      <NavLink to={page.path} exact={page.exact ? page.exact : false} activeClassName="selected">{page.name}
      </NavLink>
    </li>
  ))


  return (
    <header>
      <nav>
        <div className="left"><img src={logo} alt="Logo" className="navLogo" /></div>
        <ul className="middle">
          {navigation}
        </ul>

        <ul className="right">
          <li><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>


        </ul>

      </nav>
    </header>
  )
}

export default Header;
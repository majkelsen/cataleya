import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Footer from './layouts/Footer.js';
import logo from './img/cataleya-logo.png';

class App extends Component {


  render() {
    return (
      <Router>
        <header>
          <nav>
            <ul className="left">
              <img src={logo} alt="Logo" className="navLogo" />
              <li><NavLink to="/" exact>Home</NavLink></li>
              <li><NavLink to="/products">Produkty</NavLink></li>
              <li><NavLink to="/contact">Kontakt</NavLink></li>
            </ul>
            <ul className="right">
              <li><a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>


            </ul>

          </nav>
        </header>
        <MainPage />
        <Footer />
      </Router>
    )
  }

}

export default App;

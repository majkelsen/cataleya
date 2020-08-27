import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layouts/Header';
import PageSwitcher from './layouts/PageSwitcher';
import Footer from './layouts/Footer.js';


class App extends Component {


  render() {
    return (
      <Router>
        <Header />
        <PageSwitcher />
        <Footer />
      </Router >
    )
  }

}

export default App;

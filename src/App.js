import React, { Component } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './layouts/Header';
import PageSwitcher from './layouts/PageSwitcher';
import Footer from './layouts/Footer.js';
import ScrollToTop from './components/ScrollToTop.js'

class App extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({ isLoading: false })
  }


  render() {
    return (
      <Router>
        <ScrollToTop />
        <Header />
        <PageSwitcher />
        <Footer />
      </Router >
    )
  }

}

export default App;

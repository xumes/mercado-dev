import React, { Component } from 'react';
import logo from './logo.svg';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Footer from './Footer'
import Home from './Home'
import NovoAnuncio from './NovoAnuncio';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact component={Home} />
          <Route path='/novo-anuncio' exact component={NovoAnuncio} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App

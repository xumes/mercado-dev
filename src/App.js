import React, { Component } from 'react';
import logo from './logo.svg';

import HeaderHome from './HeaderHome'
import Footer from './Footer'
import Home from './Home'

class App extends Component {

  render() {
    let index = 0
    return (
      <div className="App">
        <HeaderHome />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import StringGenerator from './components/string-generator';
import NavBar from './components/navbar';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <StringGenerator />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import StringGenerator from './components/string-generator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">String Generator</h1>
        </header>
          <StringGenerator />
      </div>
    );
  }
}

export default App;

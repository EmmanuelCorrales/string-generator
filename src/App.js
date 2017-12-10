import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
        <MuiThemeProvider>
          <StringGenerator />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

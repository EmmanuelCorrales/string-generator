import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navigation from './components/navigation';
import Home from './components/home';
import StringGenerator from './components/StringGenerator';
import Bcrypt from './components/Bcrypt';

import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/string-generator' component={ StringGenerator }/>
            <Route path='/bcrypt' component={ Bcrypt }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

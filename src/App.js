import React, { Component } from 'react';
import './App.css';
import Home from './landing/Home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h1 className="header-title">John's Micronutrient Test</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <p id = "subtitle"> "Match cards to win!"</p>
        </header>
        {[1, 2, 3, 4].map(item => (
          <div className ={`row${item}`}>
            <MemoryCard /> 
            <MemoryCard /> 
            <MemoryCard /> 
            <MemoryCard /> 
          </div>  
        ))}
      </div>
    );
  }
}

export default App;

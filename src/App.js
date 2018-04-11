import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Adrian-DSA-Searching</h1>
          <form>
            <input type="number" placeholder="Your Favorite Number"/>
            <button type="submit">Linear Search</button>
            <button type="submit">Binary Search</button>
          </form>
      </div>
    );
  }
}

export default App;

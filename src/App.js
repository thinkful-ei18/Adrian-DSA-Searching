import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      currentNumber: null
    }
  }

  render() {


    return (
      <div className="App">
          <h1 className="App-title">Adrian-DSA-Searching</h1>
          <form>
            <input
              type="number"
              placeholder="Your Favorite Number"
              onChange={e => { e.preventDefault();
              this.setState({currentNumber: e.target.value});
            }}/>
            <button
              name="linear"
              onClick={e => {e.preventDefault();
              console.log('linear:', this.state.currentNumber);
              }}
              >Linear Search
            </button>
            <button
              name="binary"
              onClick={e => {e.preventDefault();
                console.log('binary:', this.state.currentNumber);}}
              >Binary Search
            </button>
          </form>
      </div>
    );
  }
}

export default App;

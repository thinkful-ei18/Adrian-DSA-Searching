import React, { Component } from 'react';
import './App.css';
import binarySearch from './utils/binarysearch';

class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      currentNumber: null,
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 0, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
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
                console.log('binary:', binarySearch(this.state.data, 34));}}
              >Binary Search
            </button>
          </form>
      </div>
    );
  }
}

export default App;

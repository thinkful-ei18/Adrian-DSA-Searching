import React, { Component } from 'react';
import './App.css';

function linearSearch(array, input) {
  let attempts = 0;
  const value = parseInt(input, 10);
  for (let i=0; i < array.length; i++) {
    attempts++;
      if (array[i] === value) {
        return i;
      }
  }
  return 'Could not find ' + input + ' in ' + attempts + ' searches';
};


class App extends Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 0, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      searches: '',
      result: '',
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value});
  }

  onLinearClick() {
    const result = linearSearch(this.state.data, this.state.value);
    this.setState({result: result});
    }

  binarySearch(array, value, start, end) {
    array = array.sort((a,b) => a - b);
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item === value) {
        return index;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1);
    }
  };

  render() {
    let linearResult;

    if (this.state.result === '') {
      linearResult = '';
    } else if (typeof this.state.result === 'string') {
      linearResult = this.state.result;
    }
    else {
      linearResult = 'Found the number ' + this.state.value + ' in ' + this.state.result + ' searches';
    }

    return (
      <div className="App">
          <h1 className="App-title">Adrian-DSA-Searching</h1>
          <form>
            <input
              type="number"
              placeholder="Your Favorite Number"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              name="linear"
              onClick={event =>
                {
                  event.preventDefault();
                  this.onLinearClick();
                }
              }
              >Linear Search
            </button>
            <button
              name="binary"
              >Binary Search
            </button>
          </form>
          <p>
            {linearResult}
          </p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import linearSearch from '../utils/linearsearch';
import binarySearch from '../utils/binarysearch';

class Search extends Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 0, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      result: '',
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({value: event.target.value, result: ''});
  }

  onLinearSearch() {
    const result = linearSearch(this.state.data, this.state.value);
    this.setState({result});
    }

  onBinarySearch(){
    const result = binarySearch(this.state.data, this.state.value);
    this.setState({result});
  }

  render() {
    let searchResult;

    if (this.state.result === '') {
      searchResult = '';
    } else if (typeof this.state.result === 'string') {
      searchResult = this.state.result;
    }
    else {
      searchResult = 'Found the number ' + this.state.value + ' in ' + this.state.result + ' searches';
    }

    return (
      <div className="App">
          <h2>Linear & Binary Search</h2>
          <form>
            <input
              type="number"
              placeholder="Your Favorite Number"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              name="linear"
              onClick={event => {
                  event.preventDefault();
                  this.onLinearSearch();
                }}
              >Linear Search
            </button>
            <button
              name="binary"
              onClick={event => {
                event.preventDefault();
                this.onBinarySearch();
              }}
              >Binary Search
            </button>
          </form>
          <p>
            {searchResult}
          </p>
      </div>
    );
  }
}

export default Search;

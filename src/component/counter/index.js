'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number || 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    let { number } = this.state;
    return (
      <div>
        <h2>
          Score : {number}{' '}
        </h2>
        <div>
          <button onClick={this.decrement}>Subtract Point</button>
          <button onClick={this.increment}>Add Point</button>
        </div>
      </div>
    );
  }

  increment() {
    this.setState({
      number: this.state.number + 1,
    });
  }
  decrement() {
    this.setState({
      number: this.state.number - 1,
    });
  }
}

export default Counter

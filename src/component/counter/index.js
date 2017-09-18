'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number || 0,
      name: '',
      display: 'nameToggler',
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.nameSubmit = this.nameSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  nameSubmit(e){
    e.preventDefault();
    let css = (this.state.display === 'nameToggler') ? 'nameToggleOn' : 'nameToggle';
    this.setState({'display': css});
  }


  render() {
    let { number } = this.state;
    return (
      <div>
        <form className={this.state.display} onSubmit={this.nameSubmit}>
          <h3>Enter Name</h3>

          <input value={this.state.name} onChange={this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>

        <h2>Name: {this.state.name}</h2>
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

export default Counter;

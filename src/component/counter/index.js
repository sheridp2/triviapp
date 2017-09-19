'use strict';

import React, { Component } from 'react';
import {Table, Button} from 'react-bootstrap';
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
        <form id={this.state.display} onSubmit={this.nameSubmit}>
          <h3>Enter Name</h3>

          <input value={this.state.name} onChange={this.handleChange}></input>
          <Button bsStyle="info" type="submit">Submit</Button>
        </form>

        <h2> {this.state.name} </h2>
        <h2>
          Score
        </h2>
        <Table id="score-counter">
          <tbody>
            <tr id="num-score">
              <td><Button bsStyle="danger" onClick={this.decrement}>-</Button></td>
              <td><h2>{number}</h2></td>
              <td><Button bsStyle="primary" onClick={this.increment}>+</Button></td>
            </tr>
          </tbody>
        </Table>
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

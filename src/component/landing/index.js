import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Guess Work!</h1>
        <p>Description will go here</p>
        <Link to='/play'>Start Game</Link>
      </div>
    );
  }
}

export default Landing;

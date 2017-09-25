import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Guess Work!</h1>
        <h2>Gather your friends and have fun answering trivia!</h2>

        <Link id="start-button" to='/play'>Start Game</Link>
      </div>
    );
  }
}

export default Landing;

import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Counter from '../counter';


class CounterContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      numPlayers: 0,
      display: 'buttonToggle',
    };

    this.addPlayer = this.addPlayer.bind(this);
    this.hideButton = this.hideButton.bind(this);
  }

  hideButton(){
    let css = (this.state.display === 'buttonToggle') ? 'buttonToggleOn' : 'buttonToggle';
    this.setState({'display': css});
  }

  addPlayer(e){
    e.preventDefault();
    if(this.state.numPlayers > 2){
      this.setState({
        numPlayers: this.state.numPlayers + 1,
      });
      this.hideButton();
    } else {
      this.setState({
        numPlayers: this.state.numPlayers + 1,
      });
    }
  }

  render(){
    let players = [];

    for(var i = 0; i < this.state.numPlayers; i += 1){
      players.push(<li  key={i}><Counter /></li>);
    }
    return(
      <div>
        <div>
          <ul className="player-container">
            {players}
          </ul>
        </div>
        <div>
          <Button bsStyle="primary" id={this.state.display} onClick={this.addPlayer}>Add Player</Button>
        </div>
      </div>
    );
  }
}

export default CounterContainer;

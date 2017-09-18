import React, {Component} from 'react';
import Counter from '../counter';


class CounterContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      numPlayers: 0,
    };

    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer(e){
    e.preventDefault();
    if(this.state.numPlayers > 3){
      console.log('tooo many');
    }else{
      this.setState({
        numPlayers: this.state.numPlayers + 1,
      });
    }
  }

  render(){
    let players = [];

    for(var i = 0; i < this.state.numPlayers; i += 1){
      players.push(<Counter key={i} />);
    }
    return(
      <div>
        <div>
          {players}
        </div>
        <div>
          <button onClick={this.addPlayer}>Add Player</button>
        </div>
      </div>
    );
  }
}

export default CounterContainer;

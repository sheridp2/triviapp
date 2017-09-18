import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DifficultyContainer extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <form>
          <select value={this.props.value} onChange={this.props.handleChange}>
            <option selected disabled hidden>Choose Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </form>
      </div>

    );
  }
}

export default DifficultyContainer;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DifficultyContainer extends Component {
  constructor(props){
    super(props);

    console.log('this is the difficulty', this.props.difficulty);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){

  }

  handleSubmit(e){
    e.preventDefault();
    this.setState({difficulty: e.target.value});
    console.log(this.state);
  }

  handleChange(e){
    e.preventDefault();
    console.log('button was clicked', e.target.value);
    this.setState({difficulty: e.target.value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.props.value} onChange={this.handleChange}>
            <option selected disabled hidden>Choose Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button type="submit" name="submit">Select</button>
        </form>
      </div>

    );
  }
}

export default DifficultyContainer;

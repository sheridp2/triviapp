import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DifficultyContainer extends Component {
  constructor(props){
    super(props);


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // this.setState({difficulty: e.target.value});
    console.log(this.state);

  }



  render(){
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <select value={this.props.value} onChange={this.props.handleChange}>
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

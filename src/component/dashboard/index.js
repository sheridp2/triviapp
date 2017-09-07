import React from 'react'
import Counter from '../counter'
import axios from 'axios'
import QuestionContainer from '../question-container'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions: []};
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=5&difficulty=easy')
      .then(res => {
        // console.log('data', res);
        this.setState({questions: res}, () => {
          console.log('STATE: ', this.state.questions);
        });
      });

  }

  render() {
    return (
      <div>
        <h1>Hello this is the game page</h1>
        <QuestionContainer question={this.state.questions} />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Dashboard;

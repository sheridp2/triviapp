import React from 'react';
import Counter from '../counter';
import axios from 'axios';
import QuestionContainer from '../question-container';

function decodeEntities(input) {
  var y = document.createElement('textarea');
  y.innerHTML = input;
  return y.value;
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      currentQuestion: [],
      currentAnswer: [],
      currentIncorrect: [],
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      currentQuestion: this.state.allQuestions[this.state.counter].question,
      currentAnswer: this.state.allQuestions[this.state.counter].correct_answer,
      currentIncorrect: this.state.allQuestions[this.state.counter].incorrect_answers,
    });

    if (!this.state.counter == 0) {
      this.state.allQuestions[this.state.counter].incorrect_answers.push(
        this.state.allQuestions[this.state.counter].correct_answer
      );
    }
    console.log('answer', this.state.allQuestions[this.state.counter].correct_answer);
  }

  componentDidMount() {
    axios
      .get('https://opentdb.com/api.php?amount=5&difficulty=easy')
      .then(questions => {
        let res = questions.data.results;
        this.setState({
          allQuestions: res,
        });
        this.state.allQuestions[this.state.counter].incorrect_answers.push(
          this.state.allQuestions[this.state.counter].correct_answer
        );
      });
  }

  render() {
    return (
      <div>
        <h1>Hello this is the game page</h1>
        <QuestionContainer
          currentQuestion={this.state.currentQuestion}
          currentAnswer={this.state.currentAnswer}
          currentIncorrect={this.state.currentIncorrect}
        />
        <button onClick={this.handleClick}>Next Question</button>
        <Counter />
      </div>
    );
  }
}

export default Dashboard;

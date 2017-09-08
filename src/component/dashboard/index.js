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
      currentQuestion: null,
      currentAnswer: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://opentdb.com/api.php?amount=5&difficulty=easy')
      .then(questions => {
        // console.log('WHAT', questions)
        let res = questions.data.results;
        let triviaQuestion = res.map(item => {
          let decoded = decodeEntities(item.question);
          return decoded;
        });
        let triviaAnswer = res.map(item => {
          return item.correct_answer;
        });

        this.setState(
          {
            currentQuestion: triviaQuestion[0],
            currentAnswer: triviaAnswer[0],
          },
          () => {
            console.log('STATE: ', this.state);
          }
        );
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Hello this is the game page</h1>
        <QuestionContainer
          currentQuestion={this.state.currentQuestion}
          currentAnswer={this.state.currentAnswer}
        />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Dashboard;

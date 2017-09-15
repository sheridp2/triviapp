import React from 'react';
import Counter from '../counter';
import axios from 'axios';
import QuestionContainer from '../question-container';
import DifficultyContainer from '../difficulty-container';

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
      display: 'answerToggle',
      difficulty: 'easy',
    };
    this.handleClick = this.handleClick.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }
  handleClick() {
    if(this.state.counter > 9){
      return alert('GAME OVER');
    }
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      currentQuestion: decodeEntities(this.state.allQuestions[this.state.counter].question),
      currentAnswer: decodeEntities(this.state.allQuestions[this.state.counter].correct_answer),
      currentIncorrect: this.state.allQuestions[this.state.counter].incorrect_answers,
      currentCategory: decodeEntities(this.state.allQuestions[this.state.counter].category),
      display : 'answerToggle',
    });

    if (!this.state.counter == 0) {
      this.state.allQuestions[this.state.counter].incorrect_answers.push(
        this.state.allQuestions[this.state.counter].correct_answer
      );
    }
  }

  componentWillReceiveProps(props) {
    console.log('difficulty in receiveProps', props.difficulty);
    // axios
    //   .get(`https://opentdb.com/api.php?amount=10&difficulty=${props.difficulty}`)
    //   .then(questions => {
    //     let res = questions.data.results;
    //     this.setState({
    //       allQuestions: res,
    //     });
    //     this.state.allQuestions[this.state.counter].incorrect_answers.push(
    //       this.state.allQuestions[this.state.counter].correct_answer
    //     );
    //     this.setState({
    //       counter: this.state.counter + 1,
    //       currentQuestion: decodeEntities(this.state.allQuestions[this.state.counter].question),
    //       currentAnswer: decodeEntities(this.state.allQuestions[this.state.counter].correct_answer),
    //       currentIncorrect: this.state.allQuestions[this.state.counter].incorrect_answers,
    //       currentCategory: decodeEntities(this.state.allQuestions[this.state.counter].category),
    //       display : 'answerToggle',
    //     });
    //   });
  }
  showAnswer(){
    let css = (this.state.display === 'answerToggle') ? 'answerToggleOn' : 'answerToggle';
    this.setState({'display': css});
  }

  render() {
    return (
      <div>
        <h1>Triviapp!!!</h1>
        <DifficultyContainer difficulty={this.state.difficulty} />
        <h3>Category:{this.state.currentCategory}</h3>
        <QuestionContainer
          currentQuestion={this.state.currentQuestion}
          currentAnswer={this.state.currentAnswer}
          currentIncorrect={this.state.currentIncorrect}
        />
        <button onClick={this.handleClick}>Next Question</button>
        <button onClick={this.showAnswer}>Show Answer</button>
        <div className={this.state.display}>{this.state.currentAnswer}</div>
        <Counter />
      </div>
    );
  }
}

export default Dashboard;

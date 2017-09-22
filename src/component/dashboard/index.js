import React from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import QuestionContainer from '../question-container';
import DifficultyContainer from '../difficulty-container';
import CounterContainer from '../counter-container';
import GameOver from '../game-over';

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
      gameOverDisplay: 'gameOverToggler',
      hideGame: 'hideGameOff',
      difficulty: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
    this.handleChange =this.handleChange.bind(this);
    this.showGameOver = this.showGameOver.bind(this);
    this.hideGame = this.hideGame.bind(this);
  }
  handleClick() {
    if(this.state.counter > 9){
      this.hideGame();
      this.showGameOver();

      return('game over');
    }
    if (!this.state.counter == 0) {
      this.state.allQuestions[this.state.counter].incorrect_answers.push(
        this.state.allQuestions[this.state.counter].correct_answer
      );
    }
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      currentQuestion: decodeEntities(this.state.allQuestions[this.state.counter].question),
      currentAnswer: decodeEntities(this.state.allQuestions[this.state.counter].correct_answer),
      currentIncorrect: this.state.allQuestions[this.state.counter].incorrect_answers.sort(() => Math.random() * 2 - 1),
      currentCategory: decodeEntities(this.state.allQuestions[this.state.counter].category),
      display : 'answerToggle',
    });

  }
  handleChange(e){
    e.preventDefault();
    this.setState({
      difficulty: e.target.value,
      counter: 0,
    });
    axios
      .get(`https://opentdb.com/api.php?amount=10&difficulty=${this.state.difficulty}`)
      .then(questions => {
        let res = questions.data.results;
        this.setState({
          allQuestions: res,
        });
        this.state.allQuestions[this.state.counter].incorrect_answers.push(
          this.state.allQuestions[this.state.counter].correct_answer
        );
        this.setState({
          counter: this.state.counter + 1,
          currentQuestion: decodeEntities(this.state.allQuestions[this.state.counter].question),
          currentAnswer: decodeEntities(this.state.allQuestions[this.state.counter].correct_answer),
          currentIncorrect: this.state.allQuestions[this.state.counter].incorrect_answers.sort(() => Math.random() * 2 - 1),
          currentCategory: decodeEntities(this.state.allQuestions[this.state.counter].category),
          display : 'answerToggle',
          hideGame: 'hideGameOff',
          gameOverDisplay: 'gameOverToggler',
        });
      });

  }

  showAnswer(){
    let css = (this.state.display === 'answerToggle') ? 'answerToggleOn' : 'answerToggle';
    this.setState({'display': css});
  }
  showGameOver(){
    let css = (this.state.gameOverDisplay === 'gameOverToggler') ? 'gameOverTogglerOn' : 'gameOverToggler';
    this.setState({'gameOverDisplay': css});
  }
  hideGame(){
    let css = (this.state.hideGame === 'hideGameOff') ? 'hideGameOn' : 'hideGameOff';
    this.setState({'hideGame': css});
  }

  render() {
    return (
      <div>
        <h1>Guess Work</h1>
        <DifficultyContainer difficulty={this.state.difficulty} handleChange={this.handleChange}/>
        <div id={this.state.gameOverDisplay}>
          <GameOver />
        </div>
        <div id={this.state.hideGame}>
          <h3>{this.state.currentCategory}</h3>
          <h3>Difficulty: {this.state.difficulty}</h3>
          <QuestionContainer
            currentQuestion={this.state.currentQuestion}
            currentAnswer={this.state.currentAnswer}
            currentIncorrect={this.state.currentIncorrect}
          />
          <Button bsStyle="success" onClick={this.handleClick}>Next Question</Button>
          <Button bsStyle="danger" onClick={this.showAnswer}>Show Answer</Button>
          <div className="correct-container" id={this.state.display}>{this.state.currentAnswer}</div>
        </div>

        <CounterContainer />

      </div>
    );
  }
}

export default Dashboard;

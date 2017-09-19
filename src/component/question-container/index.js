import React, { Component } from 'react';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    let answers = this.props.currentIncorrect;
    return (
      <div>
        <h2>
          {this.props.currentQuestion}
        </h2>
        <ol type='A'>
          {answers.map((answer, i) =>
            <li key={i}>
              {answer}
            </li>
          )}
        </ol>
      </div>
    );
  }
}

export default QuestionContainer;

//answers unable to render in <li> or map or as answers[i]

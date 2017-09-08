import React, { Component } from 'react';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let answers = this.props.currentIncorrect;
    console.log('answers', answers);
    return (
      <div>
        <h2>
          {this.props.currentQuestion}
        </h2>
        <li>
          {answers}
        </li>
      </div>
    );
  }
}

export default QuestionContainer;

//answers unable to render in <li> or map or as answers[i]

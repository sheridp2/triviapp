import React, {Component} from 'react';

const QuestionContainer = props => {
  return (
    <div>
      <h2>{props.currentQuestion}</h2>
      <p>{props.currentAnswer}</p>
    </div>
  );
};

export default QuestionContainer;

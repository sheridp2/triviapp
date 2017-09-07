import React, {Component} from 'react';

const QuestionContainer = props => {
  const questionItems = props.question.map(question => {
    return (

    )
  });

  return (
    <ul>
      {questionItems}
    </ul>
  );
};

export default QuestionContainer;

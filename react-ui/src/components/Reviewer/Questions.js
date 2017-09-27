import React, { Component } from 'react';
import questionSet from '../../data/questionSet';

const find = (id) => questionSet.find(p => p.id === id);

class Questions extends Component {
  render() {
    const { match } = this.props
    const question = find(Number(match.params.id) - 1)

    return (
      <div className="text-center">
        <h1>{question.questionText}</h1>
        <input type="text" className="question--short" />
      </div>
    );
  }
}

export default Questions;

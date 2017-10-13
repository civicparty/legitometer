import React, { Component } from 'react';
import questionSet from '../../data/questionSet';

const find = (id) => questionSet.find(p => p.id === id);

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //submit question and answer to reviews route
  handleSubmit() {
    axios.post('/api/add-review', {
      // question:
      // answer:
  })
  }
  render() {
    const { match } = this.props
    const question = find(Number(match.params.id) - 1)

    return (
      <div className="text-center">
        <form>
          <h1>{question.questionText}</h1>
          <input type="text" className="question--short" name="answer"/>
          <Button>Save and Next</Button>
        </form>
      </div>
    );
  }
}

export default Questions;

import React, { Component } from 'react';
import questionSet from '../../data/questionSet';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const find = (id) => questionSet.find(p => p.id === id);

class Questions extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      answer: '',
      submitResponse: false,
      questionsLeft: 0, // TODO need some way to stop at the last question and go to the final page
    };
  }

  //submit question and answer to reviews route
  handleSubmit(e) {
    e.preventDefault;

    const answer = this.state.answer;
    const question = find(Number(this.props.match.params.id) - 1).questionText;
    const { reviewId } = this.props;

    // on question submits save review_id and question and answer to responses table
    axios.patch(`/api/add-response/${reviewId}`, {
      review_id: reviewId,
      question: question,
      response: answer,
    })
    .then((res) => {
      console.log('response posted', res)
      // TODO go to the next question
      this.setState({ submitResponse: true});
      // TODO what happens when this gets to the end of the questions? --- it should change what the next page is.
      // BUT HOW? - switch statement? ie case "next" case "submit" etc
    })
    .catch((err) => {
      console.log('response error', err);
    })
  }

  handleInputChange(e) {
    this.setState({ answer: e.target.value })
  }

  render() {
    console.log("props", this.props);
    const { match } = this.props
    const question = find(Number(match.params.id) - 1)
    const nextQuestion = question.id+1;
    console.log("next question id", nextQuestion, question);
    // TODO why isn't the mission_id available?
    const casefile = match.params.casefile_id;
    const article = match.params.article_id;
    const submitResponse = this.state.submitResponse;
    console.log("submitResponse", submitResponse);

    return (
      <div className="text-center">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>{question.questionText}</h1>
          <input type="text" className="question--short"
            defaultValue={this.state.answer}
            onChange={this.handleInputChange}
          />
          <button className="button Questions__submit-button">
            Save and Continue
          </button>
        </form>
        {submitResponse && (
          <Redirect to={`/mission/1/casefile/${casefile}/article/${article}/question/${nextQuestion}`}/>
        )}
      </div>
    );
  }
}

// <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/question/:id" component={Questions} />

export default Questions;

import React, { Component } from 'react';
import questionSet from '../../data/questionSet';
import axios from 'axios';
// import { Button } from 'semantic-ui-react';
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
    };
  }

  //submit question and answer to reviews route
  handleSubmit(e, nextQuestion, question) {
    e.preventDefault;
    const answer = this.state.answer;
    const questionText = question.questionText;
    const questionType = question.type;

    // TODO review_id is not being saved to db
    // on question submits save review_id and question and answer to responses table
    axios.post('/api/add-response', {
      review_id: this.props.reviewId,
      question: questionText,
      questionType: questionType,
      response: answer,
    })
    .then((res) => {
      console.log('response posted', res)
      this.setState({ submitResponse: true});

      // TODO update this.props.QuestionId here so it will be available to the next question (updateQuestionId is sent from parent component (Mission.js))
      this.props.updateQuestionId(nextQuestion);
    })
    .catch((err) => {
      console.log('response error', err);
    })
  }

  handleInputChange(e) {
    this.setState({ answer: e.target.value })
  }

  render() {
    console.log("props", this.props); // TODO review id and question id are not sticking on redirect
    const { match } = this.props
    // const question = find(Number(match.params.id) - 1)
    let questionId = this.props.questionId;
    let question = find(questionId);
    let nextQuestion = questionId + 1;
    console.log("question stuff:", questionId, question, nextQuestion);

    // set variables for next url
    const mission = this.props.missionId;
    const casefile = match.params.casefile_id;
    const article = match.params.article_id;
    const submitResponse = this.state.submitResponse;

    return (
      <div className="text-center">
        <form onSubmit={(e) => this.handleSubmit(e, nextQuestion, question)}>
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
          <Redirect to={`/mission/${mission}/casefile/${casefile}/article/${article}/question/${nextQuestion}`}/>
        )}
      </div>
    );
  }
}

// <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/question/:id" component={Questions} />

export default Questions;

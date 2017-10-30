import React, { Component } from 'react';
import questionSet from '../../data/questionSet';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const find = (id) => questionSet.find(p => p.id === id);

class Questions extends Component {
  constructor(props) {
    super(props);
    this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      answer: '',
      submitResponse: false,
    };
  }

  //submit question and answer to reviews route
  handleAnswerSubmit(e) {
    e.preventDefault;
    const answer = this.state.answer;
    if (!answer) return false;
    const questionText = find(Number(this.props.match.params.question_id)).questionText;
    const questionType = 'question type from QuestionSet';
    const { reviewId } = this.props;


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
      this.props.updateQuestionId(this.props.match.params.question_id);
    })
    .catch((err) => {
      console.log('response error', err);
    })
  }

  handleInputChange(e) {
    this.setState({ answer: e.target.value })
  }

  render() {
    // TODO review id and question id are not sticking on redirect
    let questionId = Number(this.props.match.params.question_id);
    let question = find(questionId);
    let nextQuestion = questionId + 1;

    // set variables for next url
    const mission_id = this.props.missionId;
    const submitResponse = this.state.submitResponse;
    const { casefile_id, article_id } = this.props.match.params;

    return (
      <div className="text-center">
        <h1>{question.questionText}</h1>
        <input type="text" className="question--short"
          defaultValue={this.state.answer}
          onChange={this.handleInputChange}
        />

        { this.state.answer
          ?
            <button className="button Questions__submit-button"
              onClick={this.handleAnswerSubmit} >
              Save and Continue
            </button>

          :
            <div className="button-inactive Questions__submit-button-inactive"
              onClick={(e) => alert('Type your answer before continuing.')} >
              Type in your answer
            </div>
        }

        {submitResponse && (
          <Redirect to={`/mission/${mission_id}/casefile/${casefile_id}/article/${article_id}/question/${nextQuestion}`}/>
        )}
      </div>
    );
  }
}

// <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/question/:id" component={Questions} />

export default Questions;

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
      currentQuestionId: Number(this.props.match.params.question_id),
    };
  }

  //submit question and answer to reviews route
  handleAnswerSubmit(e) {
    e.preventDefault;
    const answer = this.state.answer;
    if (!answer) return false;
    const questionId = this.props.match.params.question_id;
    const question = find(Number(questionId));
    const questionText = question.questionText;
    const questionType = question.type;

    // on question submits save review_id and question and answer to responses table
    axios.post('/api/add-response', {
      reviewId: this.props.reviewId,
      question: questionText,
      questionId: questionId,
      questionType: questionType,
      response: answer,
    })
    .then((res) => {
      console.log('response posted', res)
      const submittedQuestionId = Number(res.data.data.questionId);
      this.props.updateQuestionId(submittedQuestionId);
      this.setState({
        submitResponse: true,
        answer: '',
        currentQuestionId: this.state.currentQuestionId + 1,
      });
    })
    .catch((err) => {
      console.log('response error', err);
    })
  }

  handleInputChange(e) {
    this.setState({
      answer: e.target.value,
    });
  }

  render() {
    // TODO review id and question id are not sticking on redirect
    let questionId = Number(this.props.match.params.question_id);
    let question = find(questionId);
    let nextQuestion = questionId + 1;

    // set variables for next url
    const mission_id = this.props.missionId;
    const { submitResponse, currentQuestionId} = this.state;
    const { casefile_id, article_id, question_id } = this.props.match.params;
    const skipToNext = submitResponse && (currentQuestionId === Number(question_id) + 1);
    console.log("skiptonext", skipToNext, currentQuestionId);
    const done = submitResponse && (currentQuestionId === 20);

      // break;)

    return (
      <div className="text-center">
        <h1>{question.questionText}</h1>
        <input type="text" className="question--short"
          value={this.state.answer}
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

        { skipToNext && !done &&
          <Redirect to={`/mission/${mission_id}/casefile/${casefile_id}/article/${article_id}/question/${nextQuestion}`}/>
        }
        { skipToNext && done &&
          <Redirect to={`/mission/complete`}/>
        }
      </div>
    );
  }
}

export default Questions;

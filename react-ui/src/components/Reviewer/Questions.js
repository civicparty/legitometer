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
    this.state = {
      answer: '',
      submitResponse: false,
      questionsLeft: 0, // TODO need to stop at the last question and go to the final page
    };
  }

  //submit question and answer to reviews route
  handleSubmit(e) {
    e.preventDefault;
    let answer = this.refs.input ? this.refs.input.value : this.state.answer;
    console.log(this.name.value, this.refs.input);
    let question = find(Number(this.props.match.params.id) - 1).questionText;
    let review_id;
    // TODO on question submits save review_id and question and answer to responses table
    // TODO hook up responses routes
    // TODO where is the review_id? how can we access it here?
    console.log("answer", answer); // TODO this was coming back undefined so trying to stop the page from refreshing and find out what it is here
    console.log("question", question);
    axios.post('/api/add-response', {
      // review_id: review_id, //this or group_id maybe is something that should be saved to the session?
      question: question,
      answer: answer,
    })
    .then((res) => {
      console.log('response posted', res)
      // TODO go to the next question
      this.setState({ submitResponse: true});
      // TODO what happens when this gets to the end of the questions? --- it should change what the next page is.
      // BUT HOW?
    })
    .catch((err) => {
      console.log('response error', err);
    })

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
          <input type="text" className="question--short" name="answer"/>
          <br></br><br></br>
          <Button>Save and Continue</Button>
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

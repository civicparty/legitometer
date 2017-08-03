import React from 'react';
import axios from 'axios';
import ArticleLink from './ArticleLink';
import { Rating, Form, Input, Button } from 'semantic-ui-react';

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitNewReview = this.submitNewReview.bind(this);
    this.state = {
      user_id: '',
      mission_id: '',
      answers: [{publisher: '', author: '', headline: '', publishDate: '', summary: '', sources: '', ads: '', objectivity: '', page_design: '', spelling: '', article_type: '', understanding_rating: '', reputablity_rating: '', citation_rating: '', headline_rating: ''}]
      // TODO eventually will be something more like a 'question_set' variable and the names will be more general, question1, question2, etc
    }
  } // end constructor

  handleInput() {

  }

  handleChange(e) {
    //set state here
    this.setState({

    });
  }

  submitNewReview(e) {
    e.preventDefault();
    console.log("submitting...", this.state);
    axios.post('http://localhost:8888/api/add-review', {
       user_id: 1,
       mission_id: 1,
       answers: this.state.answers
    })
  }

  render() {
    return (
      <div>

        <h3>Reflect on the credibility of the article: <ArticleLink /></h3>
        <Form onSubmit={(e) => this.submitNewReview(e)}>
          <Form.Group widths='equal'>
            <Form.Field>
              <Input className="StudentForm-input" label="Name of Publisher" type="text" name="publisher"/><br/><br/>
            </Form.Field>
            <Form.Field>
              <Input className="StudentForm-input" label="Who wrote this?" type="text" name="author" /><br/><br/>
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Input className="StudentForm-input" label="What is the headline?"type="text" name="headline" /><br/><br/>
            </Form.Field>
            <Form.Field>
              <Input className="StudentForm-input" label="When was it published?" type="text" name="publishDate" /><br/><br/>
            </Form.Field>
          </Form.Group>
          <label htmlFor="summary">Summarize the article</label>
          <textarea rows="10" name="summary"></textarea>
          <label htmlFor="sources">Where did the writer get their information?</label>
          <textarea rows="10" name="sources"></textarea>
          <label htmlFor="ads">What kind of advertisements appear on the page?</label>
          <textarea rows="10" name="ads"></textarea>
          <label htmlFor="objectivity">Is the article objective? Is there bias?  Is the author trying to make you believe something?</label>
          <textarea rows="10" name="objectivity"></textarea><br/>
          <label htmlFor="page_design"><strong>Is the page well-designed?</strong></label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="page_design" value="Yes"/> Yes
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="page_design" value="Kind of"/> Kind of
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="page_design" value="No"/> No <br/>
            </div>
          </div><br/>
        <label htmlFor="spelling"><strong>Are there spelling errors?</strong></label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="spelling" value="No"/> No
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="spelling" value="A few"/> A few
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="spelling" value="Lots"/> Lots <br/>
            </div>
          </div><br/>
        <label htmlFor="article_type"><strong>What kind of article is this?</strong></label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Reputable"/> Reputable
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Misleading/Biased"/> Misleading/Biased
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Opinion"/> Opinion
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Sponsored Content"/> Sponsored Content
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Imposter Content"/> Imposter Content
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Satire"/> Satire
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="article_type" value="Fabricated"/> Fabricated
            </div>
          </div>
          <h3>Rate the credibility of this article:</h3>
          <label htmlFor="understanding_rating"><strong>After reading this article, how well do you understand the topic?</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge' name="understanding_rating"/> <br/>
          <label htmlFor="reputablity_rating"><strong>How reputable do you think this source is?</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge' name="reputablity_rating"/> <br/>
          <label htmlFor="citation_rating"><strong>How likely would you be to cite this article in a paper</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge' name="citation_rating"/> <br/>
          <label htmlFor="headline_rating"><strong>How accurately do you think the headline reflects the story?</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge' name="headline_rating"/> <br/>
          <Button type="submit" className="ui button blue">Submit Your Reflection and Rating</Button>
        </Form>
        <h1></h1>
        <h1></h1>
      </div>
    )
  }
}

export default StudentForm;

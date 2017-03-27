import React from 'react';
import ArticleLink from './ArticleLink';
import { Rating, Form, Input, Button } from 'semantic-ui-react';

class StudentForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Read this article: </h3><ArticleLink />
        <h3>Reflect on the credibility of the article:</h3>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field>
              <Input className="StudentForm-input" label="Name of Publisher" type="text" name="publisher" /><br/><br/>
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
          <label htmlFor="question1">Summarize the article</label>
          <textarea rows="10" name="question1"></textarea>
          <label htmlFor="question2">Where did the writer get their information?</label>
          <textarea rows="10" name="question2"></textarea>
          <label htmlFor="question3">What kind of advertisements appear on the page?</label>
          <textarea rows="10" name="question3"></textarea>
          <label htmlFor="question4">Is the article objective? Is there bias?  Is the author trying to make you believe something?</label>
          <textarea rows="10" name="question4"></textarea><br/>
          <label htmlFor="question1"><strong>Is the page well-designed?</strong></label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question1" value="Yes"/> Yes
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question1" value="Kind of"/> Kind of
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question1" value="No"/> No <br/>
            </div>
          </div><br/>
          <label htmlFor="question2"><strong>Are there spelling errors?</strong></label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question2" value="No"/> No
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question2" value="A few"/> A few
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question2" value="Lots"/> Lots <br/>
            </div>
          </div><br/>
          <label htmlFor="question3"><strong>What kind of article is this?</strong></label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Reputable"/> Reputable
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Misleading/Biased"/> Misleading/Biased
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Opinion"/> Opinion
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Sponsored Content"/> Sponsored Content
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Imposter Content"/> Imposter Content
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Satire"/> Satire
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" name="question3" value="Fabricated"/> Fabricated
            </div>
          </div>
          <h3>Rate the credibility of this article:</h3>
          <label htmlFor=""><strong>After reading this article, how well do you understand the topic?</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge'/> <br/>
          <label htmlFor=""><strong>How reputable do you think this source is?</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge'/> <br/>
          <label htmlFor=""><strong>How likely would you be to cite this article in a paper</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge'/> <br/>
          <label htmlFor=""><strong>How accurately do you think the headline reflects the story?</strong></label><br/>
          <Rating maxRating={5} icon='star' size='huge'/> <br/>
          <Button className="ui button blue">Submit Your Reflection and Rating</Button>
        </Form>
        <h1></h1>
        <h1></h1>
      </div>
    )
  }
}

export default StudentForm;

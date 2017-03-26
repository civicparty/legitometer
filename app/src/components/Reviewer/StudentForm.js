import React from 'react';
import ArticleLink from './ArticleLink';
import { Rating, Form, Input, Button } from 'semantic-ui-react';

class StudentForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Read this article: </h3><ArticleLink />
        <h6>Reflect on the credibility of this article:</h6>
        <Form>
          <Input type="text" placeholder="Name of Publisher" />
          <Input type="text" placeholder="Who wrote this?" />
          <Input type="text" placeholder="Headline" />
          <Input type="text" placeholder="When was it published?"/>
          <textarea rows="10" placeholder="Summarize the article"></textarea>
          <textarea rows="10" placeholder="Where did the writer get their information?"></textarea>
          <textarea rows="10" placeholder="What kind of advertisements appear on the page?"></textarea>
          <textarea rows="10" placeholder="Is the article objective? Is there bias?  Is the author trying to make you believe something?"></textarea><br/>
          <label htmlFor="question1">Is the page well-designed?</label>
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
          </div>
          <label htmlFor="question2">Are there spelling errors?</label>
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
          </div>
          <label htmlFor="question3">What kind of article is this?</label>
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
          <label htmlFor="">After reading this article, how well do you understand the topic?</label><br/>
          <Rating maxRating={5}/> <br/>
          <label htmlFor="">How reputable do you think this source is?</label><br/>
          <Rating maxRating={5}/> <br/>
          <label htmlFor="">How likely would you be to cite this article in a paper</label><br/>
          <Rating maxRating={5}/> <br/>
          <label htmlFor="">How accurately do you think the headline reflects the story?</label><br/>
          <Rating maxRating={5}/> <br/>
          <Button>Submit Your Reflection and Rating</Button>
        </Form>
      </div>
    )
  }
}

export default StudentForm;

import React from 'react';
import ArticleLink from './ArticleLink';

class StudentForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Read this article: </h3><ArticleLink />
        <h6>Reflect on the credibility of this article:</h6>
        <form>
          <input type="text" placeholder="Name of Publisher" />
          <input type="text" placeholder="Who wrote this?" />
          <input type="text" placeholder="Headline" />
          <input type="text" placeholder="When was it published?"/>
          <textarea cols="30" rows="10" placeholder="Summarize the article"></textarea>
          <textarea cols="30" rows="10" placeholder="Where did the writer get their information?"></textarea>
          <textarea cols="30" rows="10" placeholder="What kind of advertisements appear on the page?"></textarea>
          <textarea cols="30" rows="10" placeholder="Is the article objective? Is there bias?  Is the author trying to make you believe something?"></textarea><br/>
          <label htmlFor="question1">Is the page well-designed?</label>
          <input type="radio" name="question1" value="Yes"/> Yes
          <input type="radio" name="question1" value="Kind of"/> Kind of
          <input type="radio" name="question1" value="No"/> No <br/>
          <label htmlFor="question2">Are there spelling errors?</label>
          <input type="radio" name="question2" value="No"/> No
          <input type="radio" name="question2" value="A few"/> A few
          <input type="radio" name="question2" value="Lots"/> Lots <br/>
          <label htmlFor="question3">What kind of article is this?</label>
          <input type="radio" name="question3" value="Reputable"/> Reputable
          <input type="radio" name="question3" value="Misleading/Biased"/> Misleading/Biased
          <input type="radio" name="question3" value="Opinion"/> Opinion
          <input type="radio" name="question3" value="Sponsored Content"/> Sponsored Content
          <input type="radio" name="question3" value="Imposter Content"/> Imposter Content
          <input type="radio" name="question3" value="Satire"/> Satire
          <input type="radio" name="question3" value="Fabricated"/> Fabricated
          <h3>Rate the credibility of this article:</h3>
          <label htmlFor="">After reading this article, how well do you understand the topic?</label>
          <h2>STARS HERE</h2>
          <label htmlFor="">How reputable do you think this source is?</label>
          <h2>STARS HERE</h2>
          <label htmlFor="">How likely would you be to cite this article in a paper</label>
          <h2>STARS HERE</h2>
          <label htmlFor="">How accurately do you think the headline reflects the story?</label>
          <h2>STARS HERE</h2>
          <button>Submit Your Reflection and Rating</button>
        </form>
      </div>
    )
  }
}

export default StudentForm;

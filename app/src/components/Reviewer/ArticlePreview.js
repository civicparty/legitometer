import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';


class ArticlePreview extends Component {

  render() {
    const { headline, url } = this.props;

    return (
      <div className="text-center">
        <h1>Start by opening the article below</h1>
        <p className="tip">Work as a team and use skim reading skills to help you evaluate the article and see if it is credible! Remember, you'll be looking at context clues and digging for information to help you better understand the article.</p>
        <p><a className="article" href={url} target="_blank">{headline}</a></p>
        <Link to="/article/1/question/1">
          <Button text="Done! I’m ready to go" />
        </Link>
      </div>
    );
  }

}

export default ArticlePreview;

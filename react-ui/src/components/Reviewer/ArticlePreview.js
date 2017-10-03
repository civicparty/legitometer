import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';


class ArticlePreview extends Component {

  render() {
    const { headline, url } = this.props;

    return (
      <div className="text-center">
        <h1>Start by opening the article below</h1>
        <p className="tip">We’ll open it in a new window so you can refer back to it.</p>
        <p><a className="article" href={url} target="_blank">{headline}</a></p>
        <Link to="/mission/1/article/1/question/1">
          <Button text="Done! I’m ready to go" />
        </Link>
      </div>
    );
  }

}

export default ArticlePreview;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';

class Article extends Component {

  render() {
    const articleLink = "http://website.example";
    const articleName = "Example Article Name";

    return (
      <div>
        <div className="text-center">
          <h1>Start by opening this article</h1>
          <p>We'll open it in a new window so you can refer back to it.</p>

          <a href={articleLink} target="_blank">{articleName}</a>
        </div>

        <Button text="I'm ready to go" />
      </div>
    );
  }

}

export default Article;
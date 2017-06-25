import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';

class Article extends Component {

  render() {
    const bodyStyles = { marginBottom: '50px' }
    const articleLink = "http://website.example";
    const articleName = "Example Article Name";

    return (
      <div className="flex-column">
        <div style={bodyStyles} className="text-center">

          <h1>Start by opening the article below</h1>
          <p className="tip">We’ll open it in a new window so you can refer back to it.</p>

          <p><a className="article" href={articleLink} target="_blank">{articleName}</a></p>

          <Button text="Done! I’m ready to go" />

        </div>
      </div>

    );
  }

}

export default Article;

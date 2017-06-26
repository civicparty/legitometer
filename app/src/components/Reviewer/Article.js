import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../Shared/Button';


class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      url: ''
    };
  }

  componentWillMount() {
    console.log("requesting articles");
    // TODO: This API needs to be refactored. We should write a route that
    // allows you to grab articles by their casefile id.
    // EX: "/api/articles/casefile/2"
    //
    // for demonstration purposes, shortcutting to grab a specific one in the array.
    axios.get('http://localhost:8888/api/articles')
      .then((res) => {
        const { headline, url } = res.data.data[27].article
        this.setState({
          headline: headline,
          url: url
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    const bodyStyles = { marginBottom: '50px' }
    const { headline, url } = this.state;

    return (
      <div className="flex-column">
        <div style={bodyStyles} className="text-center">

          <h1>Start by opening the article below</h1>
          <p className="tip">We’ll open it in a new window so you can refer back to it.</p>

          <p><a className="article" href={url} target="_blank">{headline}</a></p>

          <Button text="Done! I’m ready to go" />

        </div>
      </div>

    );
  }

}

export default Article;

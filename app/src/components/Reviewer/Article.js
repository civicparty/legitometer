import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../Shared/Button';
import Footer from './Footer';
import Questions from './Questions';


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
    const bodyStyles = {
      flexGrow: 1,
      justifyContent: 'center',
      padding: '0 40px',
    }
    const articleContainer = {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    }

    const previewProps = this.state

    return (
      <div style={articleContainer}>
        <div className="flex-column" style={bodyStyles}>
          <Route path="/article/:id" exact render={(previewProps) => <Preview />} />
          <Route path="/article/:article_id/question/:id" exact component={Questions} />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }

}

const Preview = (props) => {
  const { headline, url } = props;

  return (
    <div className="text-center">
      <h1>Start by opening the article below</h1>
      <p className="tip">We’ll open it in a new window so you can refer back to it.</p>
      <p><a className="article" href={url} target="_blank">{headline}</a></p>
      <Link to="article/1/question/1">
        <Button text="Done! I’m ready to go" />
      </Link>
    </div>
  )
}

export default Article;

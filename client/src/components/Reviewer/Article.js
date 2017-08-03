import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Footer from './Footer';
import Questions from './Questions';
import ArticlePreview from './ArticlePreview';


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
        //const { headline, url } = res.data.data[27].article
        const headline = res.data[27].article.headline;
        const url = res.data[27].article.url;
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
          <Route path="/article/:id" exact render={() => <ArticlePreview {...previewProps} />} />
          <Route path="/article/:article_id/question/:id" exact component={Questions} />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }

}

export default Article;

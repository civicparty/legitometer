import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Footer from './Footer';
import Questions from './Questions';
import ArticlePreview from './ArticlePreview';
import GroupNames from './GroupNames';
import Start from './Start';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      url: ''
    };
  }

  componentWillMount() {
    console.log("Requesting Articles from '/api/articles'");

    axios.get('/api/articles')
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
          <Route exact path="/mission/:id/start" component={Start} />
          <Route exact path="/mission/:id/team" component={GroupNames} />
          <Route exact path="/mission/:id/article/1" render={() => <ArticlePreview {...previewProps} />} />
          <Route exact path="/mission/:id/article/:article_id/question/:id" component={Questions} />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }

}

export default Article;

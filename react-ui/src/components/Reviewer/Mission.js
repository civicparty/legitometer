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
      url: '',
      article: {},
      reviewId: '',
      questionId: '',
      missionId: this.props.match.params.id,
      casefileId: this.props.match.params.casefile_id,
    };
    this.updateReviewId = this.updateReviewId.bind(this);
    this.updateQuestionId = this.updateQuestionId.bind(this);
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  componentWillMount() {
    const { casefile_id } = this.props.match.params;

    axios.get(`/api/casefile/${casefile_id}/articles`)
      .then((res) => {
        const randomId = this.getRandomIntInclusive(0, res.data.length - 1)
        console.log("random article", res.data[randomId])

        this.setState({
          article: res.data[randomId],
          headline: res.data[randomId].headline,
          url: res.data[randomId].url,
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  updateReviewId(reviewId) {
    this.setState({ reviewId: reviewId });
  }

  updateQuestionId(questionId) {
    this.setState({ questionId: questionId });
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

    const missionState = this.state;

    return (
      <div style={articleContainer}>
        <div className="flex-column" style={bodyStyles}>
          <Route exact path="/mission/:id/casefile/:casefile_id/start" component={Start} />
          <Route exact path="/mission/:id/casefile/:casefile_id/team"
            render={() => <GroupNames updateReviewId={this.updateReviewId} updateQuestionId={this.updateQuestionId} {...this.props} />}
          />
          <Route exact path="/mission/:id/casefile/:casefile_id/article/preview"
            render={() => <ArticlePreview {...missionState} />}
          />
          <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/question/:id"
            render={() => <Questions {...missionState} {...this.props} />}
          />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }

}

export default Article;

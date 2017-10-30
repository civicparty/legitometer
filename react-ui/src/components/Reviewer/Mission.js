import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Footer from './Footer';
import Questions from './Questions';
import ArticlePreview from './ArticlePreview';
import GroupNames from './GroupNames';
import Start from './Start';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      url: '',
      article: {},
      reviewId: '',
      questionId: '',
      articleId: 1,

      missionId: this.props.match.params.id,
      casefileId: this.props.match.params.casefile_id,
    };
    this.updateReviewId = this.updateReviewId.bind(this);
    this.updateQuestionId = this.updateQuestionId.bind(this);
  }

  componentWillMount() {
    const { casefile_id } = this.props.match.params;
    const { articleId } = this.state;

    axios.get(`/api/casefile/${casefile_id}/articles`)
      .then((res) => {
        this.setState({
          article: res.data[articleId],
          headline: res.data[articleId].headline,
          url: res.data[articleId].url,
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
    console.log("updating question id Mission.js", questionId);
    this.setState({ questionId: questionId });

  incrimentArticleId(articleId) {
    // TODO: call this at the end of the form.
    this.setState({ articleId: articleId + 1 });
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
            render={() => <GroupNames updateReviewId={this.updateReviewId} updateQuestionId={this.updateQuestionId} {...this.props} {...missionState}/>}
          />
          <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/preview"
            render={() => <ArticlePreview {...missionState} {...this.props} />}
          />
          <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/question/:id"
            //render={() => <Questions updateQuestionId={this.updateQuestionId} {...missionState} {...this.props} />}
            render={() => <Questions updateArticleId={this.incrimentArticleId} {...missionState} {...this.props} />}

          />
        </div>
        <Footer {...this.props} />
      </div>
    );
  }

}

export default Mission;

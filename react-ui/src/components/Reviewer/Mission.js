import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Footer from './Footer';
import Questions from './Questions';
import ArticlePreview from './ArticlePreview';
import GroupNames from './GroupNames';
import Start from './Start';
import Complete from './Complete';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      url: '',
      article: {},
      reviewId: '',
      questionId: 1,
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
    this.setState({ questionId: questionId + 1 });
  }

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
          <Switch>
          <Route exact path="/mission/:id/casefile/:casefile_id/start" component={Start} />
          <Route exact path="/mission/:id/casefile/:casefile_id/team"
            render={() => <GroupNames updateReviewId={this.updateReviewId} updateQuestionId={this.updateQuestionId} {...this.props} {...missionState}/>}
          />
          <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/preview"
            render={() => <ArticlePreview {...missionState} {...this.props} />}
          />
          <Route exact path="/mission/:id/casefile/:casefile_id/article/:article_id/question/:question_id"
            render={(props) => {
              return <Questions {...this.props} {...missionState} {...props}
                updateArticleId={this.incrimentArticleId}
                updateQuestionId={this.updateQuestionId}
              />
            }}
          />
          <Route exact path="/mission/complete" component={Complete}/>
        </Switch> 
        </div>
        <Footer {...this.props} />
      </div>
    );
  }

}

export default Mission;

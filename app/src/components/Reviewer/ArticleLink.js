import React from 'react';
import axios from 'axios'
//import ReviewList from './ReviewList'

class ArticleLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      articles: []
    }
  }

  componentDidMount() {
    console.log("article component, mounted");
    // TODO - these need to be fetched based on casefile_id and returned one after the other
    axios.get('http://localhost:8888/api/articles')
      .then((res) => {
        console.log("articles gotten!", res.data);
        this.setState({ articles: res.data })
      })
      .then(() => {
        console.log("then...", this.state);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentWillUpdate(nextProps, nextState) {
        //you'll see the changing state value in here
        console.log('Your prev state: ' + this.state.link);
        console.log('Your next state: ' + nextState.link);
    }

  render() {

    return (
        <h5><a href={this.state.link}>{this.state.link}</a></h5>
    )
  }
}

export default ArticleLink;

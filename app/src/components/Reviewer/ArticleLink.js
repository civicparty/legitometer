import React from 'react';
import axios from 'axios'
//import ReviewList from './ReviewList'

class ArticleLink extends React.Component {
  constructor(props) {
    super(props);
    this.chooseArticle = this.chooseArticle.bind(this);
    this.state = {
      link: '',
      articles: []
    }
  }

  componentDidMount() {
    console.log("component, mounted");
    axios.get('http://localhost:8888/api/articles')
      .then((res) => {
        console.log("gotten!", res.data);
        this.setState({ articles: res.data }, function chooseArticle() {

        });
      })
      .then(() => {
        console.log("then...", this.state);
      })
      .then(() => {
        this.chooseArticle();
      })
      .catch((err) => {
        console.error(err);
      })
  }

  chooseArticle() {
    console.log("choose!", this.state);
    let x = 0;
    let y = this.state.articles.length-1;
    let randomNum = Math.floor(Math.random() * ((y-x)+1) + x);
    this.setState({ link:this.state.articles[randomNum].article.url });
    console.log(randomNum, this.state, this.state.articles[randomNum].article.url);
    return randomNum;
  }

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

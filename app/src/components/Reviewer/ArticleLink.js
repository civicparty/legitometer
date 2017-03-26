import React from 'react';
import axios from 'axios'
import ReviewList from './ReviewList'

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
    axios.get('http://localhost:8888/articles/api')
      .then((res) => {
        console.log("gotten!", res.data);
        this.setState({ articles: res.data });
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
    this.setState({ link:this.state.articles[randomNum].url });
    console.log(randomNum, this.state, this.state.articles[randomNum].url);
    return randomNum;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("wtf", this.state.link, nextState.link);
    return (this.state.link !== nextState.link)
  }

  render() {

    return (
        <h4>{this.link}</h4>
    )
  }
}

export default ArticleLink;

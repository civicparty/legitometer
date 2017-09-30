import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class ViewCasefile extends React.Component {
  constructor() {
    super();
    this.viewArticles = this.viewArticles.bind(this);
  }


viewArticles() {
  // '/api/articles/casefile/:id'
  // axios.get('/api/articles/casefile/' + casefileId, {
  //   params: { id: casefileId },
  // })
  // .then((res) => {
  //
  // })
  // .catch((err) => {
  //   console.log("view casefile error", err);
  // })
}

render() {
  return(
    <div>
      <p>this will be the thing</p>
    </div>
  )
}

}

export default ViewCasefile;

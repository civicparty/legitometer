import React from 'react';
import axios from 'axios';
import { Header, Table } from 'semantic-ui-react';

import ArticleListItem from './ArticleListItem';

class ViewCasefile extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      casefile: '',
    }
  }

componentDidMount() {
  console.log("heelo component");
  let temp = this.state.articles.slice();

  axios.get(`/api/articles/casefile/${this.props.match.params.id}`)
    .then((res) => {
      console.log("we win! what did we win? articles!", res.data); //array of arrays
      for (var i = 0; i < res.data.length; i++) {
        // for each array in the res.data array, save the headline, url, and type to this.state.articles
        temp.push(res.data[i]);
      }
      this.setState({
        articles: temp
      })
    })
    .then(() => {
      console.log("attempting to get casefile name");
      axios.get(`/api/casefile/${this.props.match.params.id}`)
        .then((res) => {
          console.log("hiii", res);
            this.setState({ casefile: res.data})
        })
    })
    .catch((err) => {
      console.log("view casefile error", err);
    })


}

render() {
  return(
    <div>
      <h2>Casefile: {this.state.casefile}</h2>
      <Table celled>
        <Table.Header>
            <th>Headline</th>
            <th>URL</th>
            <th>Type</th>
        </Table.Header>
        <Table.Body>
          {this.state.articles.map((article, i) => {
            return (
              <tr key={i}>
                <td>{article[0]}</td>
                <td>{article[1]}</td>
                <td>{article[2]}</td>
              </tr>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}

}

export default ViewCasefile;

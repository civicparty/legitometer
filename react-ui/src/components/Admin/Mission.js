import React from 'react';
import axios from 'axios';
import { Header, Table } from 'semantic-ui-react';
import ArticleListItem from './ArticleListItem';

class Mission extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    // get articles
    axios.get('/api/articles/' + this.props.match.params.id, {
      params: {id: this.props.match.params.id}})
      .then((res) => {
        // save relevant article info to state
        console.log("yay something worked!", res.data);
        // res.data = [[0:”headline”, 1:”url”, 2:”type”], [0:,1:,2:], [0:,1:,2:] ]
        for(let key in res.data) {
          // assign state to temporary arrays
          let temp = this.state.articles.slice();
          // push data to arrays
          temp.push(res.data[key]);
          console.log("and each piece is", res.data[key]);
          // set the state
          this.setState({
            articles: temp
          })
        }
      })
      .catch((err) => {
        console.log("get articles error in Mission.js", err);
      })
  }

  render() {
    console.log("articles in render", this.state.articles);
    return (
      <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>Articles</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Object.keys(this.state.articles).map((key, id) => {
                return (
                  <ArticleListItem
                    headline={this.state.articles[key][0]}
                    url={this.state.articles[key][1]}
                    type={this.state.articles[key][2]}
                    id={id}
                    key={id}
                  />
                )
              })}
            </Table.Body>
          </Table>
      </div>
    )
  }
}

// Mission.defaultProps = {
//   test: "well, so we'll try this"
//   //so defaultProps could be... from database?
// }

export default Mission;

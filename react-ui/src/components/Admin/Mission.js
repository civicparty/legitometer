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
// TODO add another state var called noArticles that is shown conditionally instead of the Object.keys stuff
  componentDidMount() {
    // get articles
    console.log("component mounted", this.props.match.params.id);
    axios.get('/api/articles/review/' + this.props.match.params.id, {
      params: {name: this.props.match.params.id} })
      .then((res) => {
        console.log("artticels retrieved", res.data, typeof res.data);
        // save relevant article info to state
        if (typeof res.data === 'string') {
          this.setState({ articles: res.data})
        } else {
          for(let key in res.data) {
            // assign state to temporary arrays
            let temp = this.state.articles.slice();
            // push data to arrays
            temp.push(res.data[key]);
            // set the state
            this.setState({
              articles: temp
            })
          }
        }


      })
      .catch((err) => {
        console.log("get articles error in Mission.js", err);
      })
  }
// TODO should also display casefile name
// name comes from <Link to={`/admin/mission/${missionName}`} - does this.props.collection get passed through too?
  render() {
    let missionName = this.props.match.params.id.replace(/_/g, ' ');

    return (
      <div>
          <h3>Mission: { missionName }</h3>
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

export default Mission;

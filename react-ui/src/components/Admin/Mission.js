import React from 'react';
import axios from 'axios';
import { Header, Table } from 'semantic-ui-react';
import ArticleListItem from './ArticleListItem';
import AddCollectionToMission from './AddCollectionToMission';


class Mission extends React.Component {
  constructor() {
    super();
    this.state = {
      mission: null,
    }
  }

  componentDidMount() {
    // get casefile
    axios.get(`/api/view-mission/${this.props.match.params.id}`)
      .then((res) => this.setState({ mission: res.data }))
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
          { this.state.mission &&
            <AddCollectionToMission mission={this.state.mission} />
          }

          {/* <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='4'>Articles</Table.HeaderCell>
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
          </Table> */}
      </div>
    )
  }
}

export default Mission;

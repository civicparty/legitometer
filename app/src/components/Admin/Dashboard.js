import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header, Table } from 'semantic-ui-react';
import MissionListItem from './MissionListItem';

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
      collections: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/api/missions')
      .then((res) => {
        //loop through the object and set the state
        for(let key in res.data) {
          // assign state to temporary arrays
          let temp_mission = this.state.games.slice();
          let temp_casefile = this.state.collections.slice();
          // push data to arrays
          temp_mission.push(key);
          temp_casefile.push(res.data[key]);
          // set the state
          this.setState({
            games: temp_mission,
            collections: temp_casefile,
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Header as="h1" className="floated left">
          Operation Legit-o-Meter
        </Header>

        <Link to="new" className="ui button positive right floated">
          Create a New Mission
        </Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Your Existing Missions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.keys(this.state.games).map((key, id) => {
              return (
                <MissionListItem
                  name={this.state.games[key]}
                  collection={this.state.collections[key]}
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

export default AdminDashboard;

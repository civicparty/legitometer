import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Header, Table } from 'semantic-ui-react';
import MissionListItem from './MissionListItem';

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);
    this.state = { missions: [] };
  }

  handleRemove(id) {
    const updatedMissions = this.state.missions.filter((mission) => {
      return mission.missionId !== id
    })
    this.setState({ missions: updatedMissions });
  }

  componentWillMount() {
    axios.get('/api/missions')
      .then((res) => {
        this.setState({
          missions: res.data,
        })
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
        <Link to="/admin/new-mission/" className="ui button positive right floated">
          Create a New Mission
        </Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Existing Missions</Table.HeaderCell>
              <Table.HeaderCell>Mission Casefiles</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.state.missions.map((mission, i) => {
              return (
                <MissionListItem
                  mission={mission}
                  id={mission.missionId}
                  key={mission.missionId}
                  handleRemove={this.handleRemove}
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

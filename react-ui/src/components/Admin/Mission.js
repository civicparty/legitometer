import React from 'react';
import axios from 'axios';

import AddCollectionToMission from './AddCollectionToMission';


class Mission extends React.Component {
  constructor() {
    super();
    this.state = {
      mission: null,
    }
  }

  componentDidMount() {
    // get mission details
    axios.get(`/api/view-mission/${this.props.match.params.id}`)
      .then((res) => this.setState({ mission: res.data }))
      .catch((err) => {
        console.log("get articles error in Mission.js", err);
      })
  }

  render() {
    console.log(this.state.mission)
    let missionName = this.props.match.params.id.replace(/_/g, ' ');

    return (
      <div>
        <h3>Mission: { missionName }</h3>
        { this.state.mission &&
          <AddCollectionToMission mission={this.state.mission} />
        }
      </div>
    )
  }
}

export default Mission;

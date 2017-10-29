import React from 'react';
import axios from 'axios';
import Table from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      group: [], //array of objects [{review_id: member1, member2, member3}]
    };
  }
  componentWillMount() {
    const { mission_id } = this.props.match.params;
    // show all the groups OR reviews???? for a given mission_id
    console.log("component is mounting, mission id is", mission_id, this, this.state, this.props);
    axios.get(`/api/reviews/mission/${mission_id}`)
    .then((res) => {
      let group = this.state.group.slice();
      console.log("component will mount", res.data);
      for (var i = 0; i < res.data.length; i++) {
        group.push({"rev": res.data[i].review_id, "grp": res.data[i].group_id});
      }
      this.setState({ group: group });
     })
    .catch((err) => {
      console.log("componentWillMount error Reviews.js", err);
    })
  }

  componentDidMount() {
    console.log("component mounted", this);
    // get group names
    // let group_ids = this.state.group['grp'];
    // axios.get(`/api/groups/${group}`) //no no this doesn't work at all
    // .then((res) => {
    //   this.setState({
    //     group: res.data
    //   })
    // })
    // .catch((err) => {
    //   console.log("it's all wrong", err);
    // })
  }

  // show a list of all the groups in the mission like:
  // <link>buffy, willow, xander</link>
  render() {
    const { mission_id } = this.props.match.params;
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Mission {this.props.mission_id} Groups</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <p>stuff here</p>
        </Table.Body>
      </Table>
    )
  }

}
// { this.state.group.map((members, i) => {
  // return (
  // <MissionListItem
  //   mission={mission}
  //   id={mission.missionId}
  //   key={mission.missionId}
  //   handleRemove={this.handleRemove}
  // />
  // )
// })}

export default Reviews;

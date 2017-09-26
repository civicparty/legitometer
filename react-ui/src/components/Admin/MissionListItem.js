import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class MissionListItem extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete() {
    console.log("heeeelllllooooo?");
    axios.delete('/api/delete-mission/' + this.props.name, {
      params: {name: this.props.name},
    })
    .then((res) => {
      console.log("delete success response", res);
      // TODO redirect to dashboard
    })
    .catch((err) => {
      console.log("delete error response", err);
    })
  }

  render() {
    let missionName = this.props.name.replace(/ /g,"_");
    return (
      <tr key={this.props.id}>
        <td className="strong">{this.props.name}</td>
        <td>{this.props.collection}</td>
        <td className="collapsing">
          {/* TODO: We should probably replace the mission name with an id in
            this route  unless we are sure the missionName is unique. */}
          <Link to={`/admin/mission/${missionName}/`} className="ui button blue">
            Review
          </Link>
          <Button type="button" onClick={this.handleDelete} basic color="red">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}

export default MissionListItem;

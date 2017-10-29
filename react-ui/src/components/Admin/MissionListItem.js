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
    const { missionId } = this.props.mission
    axios.delete('/api/delete-mission/' + missionId, {
      params: { id: missionId },
    })
    .then((res) => {
      console.log("delete success response", res);
      this.props.handleRemove(missionId);
    })
    .catch((err) => {
      console.log("delete error response", err);
    })
  }

  render() {
    const missionPath = this.props.mission.missionName.replace(/ /g,"_");
    const {
      missionName,
      missionId,
      casefileName,
      casefileId,
    } = this.props.mission;

    return (
      <tr key={missionId}>
        <td className="strong">{missionName}</td>
        <td>
          <Link to={`/admin/collection/${casefileId}/articles`}>
            {casefileName}
          </Link>
        </td>
        <td className="collapsing">
          {/* TODO: We should probably replace the mission name with an id in
            this route  unless we are sure the missionName is unique. */}
          <Link to={`/admin/mission/${missionPath}/`} className="ui button blue">
            Edit
          </Link>
          <Button type="button" onClick={this.handleDelete} basic color="red">
            Delete
          </Button>
          <Link to={`/admin/mission/reviews/${missionId}`}>
            Review
          </Link>
        </td>
      </tr>
    )
  }
}

export default MissionListItem;

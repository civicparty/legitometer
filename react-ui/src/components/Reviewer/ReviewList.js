import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class ReviewList extends React.Component {
  render() {
    const {
      missionName,
      missionId,
      casefileName,
    } = this.props.mission;

    return(
      <div key={missionId}>
        <Link to={`/article/${missionId}/start`}>
          <button className="button">
            {missionName}: {casefileName}
          </button>
        </Link>
      </div>
    )
  }
}

export default ReviewList;

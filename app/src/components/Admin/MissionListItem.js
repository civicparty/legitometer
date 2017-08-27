import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class MissionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault;
    // delete mission (by name, as ids were not matching up, TODO - fix this)
    axios.delete('http://localhost:8888/api/delete-mission/' + this.props.name, {
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
    return (
      <tr key={this.props.id}>
        <td className="strong">{this.props.name}</td>
        <td>{this.props.collection}</td>
        <td className="collapsing">
          <Link to={`/mission/${this.props.name}/${this.props.collection}`} className="ui button blue">
            Review
          </Link>
          <Button onClick={(e) => this.handleDelete(e)} basic color="red" type="submit">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}

export default MissionListItem;

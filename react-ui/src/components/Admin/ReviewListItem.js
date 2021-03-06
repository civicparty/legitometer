import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class ReviewListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    // get group names
    // console.log("component did mount, getting names for group:", this.props.group);
    axios.get(`/api/groups/${this.props.group}`)
    .then((members) => {
      // console.log("got group members!", members.data);
      this.setState({ members: members.data });
    })
  }
  render() {
    let reviewid = this.props.id;
    let mems = this.state.members.join(", ");
    return (
      <div>
        <tr key={this.props.id}>
          <td>
            <Link to={`/admin/responses/${reviewid}`}>
              {mems}
            </Link>
          </td>
        </tr>
      </div>
    )
  }
}


export default ReviewListItem;

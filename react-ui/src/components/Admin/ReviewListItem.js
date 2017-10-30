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
    console.log("component did mount, getting names for group:", this.props.group);
    axios.get(`/api/groups/${this.props.group}`)
    .then((members) => {
      console.log("got group members!", members.data);
      this.setState({ members: members.data });
    })
  }
  render() {
  console.log("REVIEWLISTITEM props", this.props);

    return (
      <div>
        <tr key={this.props.id}>
          <td>group name / also is link - {this.state.members}</td>
        </tr>
      </div>
    )
  }
}


export default ReviewListItem;

// <ReviewListItem
//   review={review}
//   group={review.group_id}
//   id={review.review_id}
//   key={review.review_id}
// />

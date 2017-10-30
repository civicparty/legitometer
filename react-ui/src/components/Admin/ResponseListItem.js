import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class ResponseListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    }
  }

  componentDidMount() {
    // get group names
    // console.log("component did mount, getting names for group:", this.props.group);
    // axios.get(`/api/groups/${this.props.group}`)
    // .then((members) => {
    //   console.log("got group members!", members.data);
    //   this.setState({ members: members.data });
    // })
  }
  render() {
    console.log("ResponseLISTITEM props", this.props);
    // ResponseLISTITEM props Object
    // { response: "xs",
    //   question: "Briefly summarize this article in 1…",
    //   questionType: "long",
    //   id: undefined }
    return (
      <div>
        <tr key={this.props.id}>
          <td>
            {this.props.question}
          </td>
          <td>
            {this.props.response}
          </td>
        </tr>
      </div>
    )
  }
}


export default ResponseListItem;

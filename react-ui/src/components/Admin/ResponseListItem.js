import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class ResponseListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
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

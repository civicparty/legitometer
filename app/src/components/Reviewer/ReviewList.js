import React from 'react';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
  render() {
    return(
      <tr key={this.props.id}>
        <td><h5 className="strong">{this.props.name} - {this.props.casefile}</h5></td>
        <td className="collapsing">
          <Link to={`/start`} className='ui button blue'>Start</Link>
        </td>
      </tr>

    )
  }
}

export default ReviewList;

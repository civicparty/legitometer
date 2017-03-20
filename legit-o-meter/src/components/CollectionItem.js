import React from 'react';
import { Link } from 'react-router-dom';

class CollectionItem extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.name}</td>
        <td>created by {this.props.createdBy}</td>
        <td><Link to='create'>SELECT</Link></td>
        <td><button>edit</button></td>
        <td><button>delete</button></td>
      </tr>
    )
  }
}

export default CollectionItem;


// the name entered in input will need to go to the seeddata/database and then
// show up in the dashboard games list first with its collection

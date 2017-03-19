import React from 'react';

class CollectionItem extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.name}</td>
        <td>created by {this.props.createdBy}</td>
        <td><button>SELECT</button></td>
      </tr>
    )
  }
}

export default CollectionItem;

// <td>{this.props.collection.name}</td>
// <td>Created by {this.props.collection.createdBy}</td>

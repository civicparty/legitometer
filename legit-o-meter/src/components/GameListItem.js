import React from 'react';
import '../App.css';

class GameListItem extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td><button><a href="/game/:id" className="reviewButton">Review</a></button></td>
        <td><h5 className="gameName">{this.props.name} - {this.props.collection.name}</h5></td>
        <td><button className="deleteButton">Delete</button></td>
      </tr>
    )
  }
}

export default GameListItem;

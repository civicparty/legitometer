import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class GameListItem extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td><Link to={`/game/${this.props.id}`} className="reviewButton">Review</Link></td>
        <td><h5 className="gameName">{this.props.name} - {this.props.collection} </h5></td>
        <td><button className="deleteButton">Delete</button></td>
      </tr>
    )
  }
}

export default GameListItem;

//{this.props.collection.name}{this.props.collection}

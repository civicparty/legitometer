import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class GameListItem extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td className="strong">{this.props.name}</td>
        <td>{this.props.collection}</td>
        <td className="collapsing">
          <Link to={`/game/${this.props.id}`} className="ui button blue">
            Review
          </Link>
          <Button basic color="red">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}

export default GameListItem;

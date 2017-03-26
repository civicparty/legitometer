import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class GameListItem extends React.Component {
  render() {
    return (
      <tr key={this.props.id}>
        <td>
          <h5 className="gameName">
            {this.props.name} - {this.props.collection}
          </h5>
        </td>
        <td className="collapsing">
          <Link to={`/game/${this.props.id}`} className="ui button blue">
            Review
          </Link>
          <Button floated right basic color="red">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}

export default GameListItem;

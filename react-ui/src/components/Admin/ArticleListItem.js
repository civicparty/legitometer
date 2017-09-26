import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class ArticleListItem extends React.Component {
  constructor() {
    super();

  }


  render() {
    return (
      <tr key={this.props.id}>
        <td className="strong">{this.props.headline}</td>
        <td><a href={this.props.url}>{this.props.url}</a></td>
        <td>{this.props.type}</td>
        <td className="collapsing">
          {/* TODO: User missionId here instead? */}
          <Link to={`/admin/mission/${'missionName'}/edit`} className="ui button blue">
            Edit
          </Link>
        </td>
      </tr>
    )
  }
}

export default ArticleListItem;

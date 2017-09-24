import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class ArticleListItem extends React.Component {
  constructor() {
    super();

  }


  render() {
    // console.log("articlelistitem", this.props);
    return (
      <tr key={this.props.id}>
        <td className="strong">{this.props.headline}</td>
        <td><a href={this.props.url}>{this.props.url}</a></td>
        <td>{this.props.type}</td>
        <td className="collapsing">
        </td>
      </tr>
    )
  }
}

export default ArticleListItem;

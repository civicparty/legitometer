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
      <tr key={this.props.article.id}>
        <td className="strong">{this.props.article.headline}</td>
        <td><a href={this.props.url}>{this.props.article.url}</a></td>
        <td>{this.props.article.type}</td>
      </tr>
    )
  }
}

export default ArticleListItem;

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


class ReviewList extends React.Component {
  render() {
    return(
      <div key={this.props.id}>
        <Link to={`/article/${this.props.id}/start`}>
          <Button basic color="red">
            {this.props.name}: {this.props.collection}
          </Button>
        </Link>
      </div>
    )
  }
}

export default ReviewList;

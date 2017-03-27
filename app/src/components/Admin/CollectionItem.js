import React from 'react';

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate (e) {
    e.preventDefault();
    this.props.updateCollection(this.props.id);
  }

  render () {
    return (
      <tr key={this.props.id}>
        <td>{this.props.name}</td>
        <td>created by {this.props.createdBy}</td>
        <td>
          <button onClick={(e) => this.handleUpdate(e)}
            className="ui button CollectionItem__centered-button"
          >
            Choose
          </button>
        </td>
      </tr>
    )
  }
}

export default CollectionItem;


// the name entered in input will need to go to the seeddata/database and then
// show up in the dashboard games list first with its collection

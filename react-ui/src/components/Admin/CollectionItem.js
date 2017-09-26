import React from 'react';

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate (e) {
    e.preventDefault();

    // Update which row is highlighted
    this.props.updateCollection(this.props.id);
  }

  render () {
    const { activeCollectionId, id } = this.props;
    const isActive = activeCollectionId === id;
    const rowColorClasses = isActive ? 'blue inverted ui table' : '';
    const baseButtonClasses = 'ui button CollectionItem__centered-button';
    const buttonClasses = isActive ? 'inverted white ' + baseButtonClasses : baseButtonClasses;
    const buttonText = isActive ? 'Selected' : 'Choose';

    return (
      <tr className={rowColorClasses}>
        <td>{this.props.name}</td>
        <td>created by {this.props.createdBy}</td>
        <td>
          <button
            onClick={(e) => this.handleUpdate(e)}
            className={buttonClasses}
          >
            {buttonText}
          </button>
        </td>
      </tr>
    )
  }
}

export default CollectionItem;


// the name entered in input will need to go to the seeddata/database and then
// show up in the dashboard games list first with its collection

import React from 'react';

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate (e) {
    e.preventDefault();

    // Update which row is highlighted
    console.log("hEY LOOK HERE", this.props.id, "what it waS: ", this.props.activeCollectionId);
    // this.props.id is zero (activeCollectionId is 1) : hEY LOOK HERE 8 what it waS:  null // neither of these...
    // why is id 0???
    console.log("props", this.props);
 // this works and saves the correct id BUT DOES NOT ACTIVATE THE SELECTED BUTTON
//    this.props.updateCollection(this.props.activeCollectionId);
//  this works and updates the selected button BUT DOES NOT SAVE THE CORRECT ID AND CAUSES 500 ERRORS
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
      <tr key={this.props.id} className={rowColorClasses}>
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

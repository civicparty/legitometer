import React from 'react';
//import { Link } from 'react-router-dom';

class CollectionItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.onClick = this.onClick.bind(this);
  // }
  collectionItemClicked() {
    console.log("clicked!!!", this.props.id);
    this.props.updateCollectionID(this.props.id)
  }
  render() {
    return (
      <tr key={this.props.id}>
        <td>{this.props.name}</td>
        <td>created by {this.props.createdBy}</td>
        <td>id {this.props.id}</td>
        <td><button onClick={this.collectionItemClicked.bind(this)}>SELECT </button></td>
        <td><button>edit</button></td>
        <td><button>delete</button></td>
      </tr>
    )
  }
}

export default CollectionItem;


// the name entered in input will need to go to the seeddata/database and then
// show up in the dashboard games list first with its collection

import React from 'react';
import Header from './Header';
import { collections } from '../seedData';
import CollectionItem from './CollectionItem';

//make a new game - selecting collection [articles]
class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: '',
      collection_id: undefined,
      user_id: undefined,
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: this.name.value,
      collection_id: 0, // TODO this will come from the collection selection
      user_id: 0, // TODO this will come from the session
    })
    //this.setState({game});
    console.log("yessss?", this.state);

  }
  handleChange(e) {
    console.log("um, now what?");
    //change <span> to back to <input value="this.state.name">
    //change button back to SAVE
  }



  render() {
    let display = <div><input ref={(input) => this.name = input} type="text" placeholder="Enter name of new game"></input><br/><button type="submit">Save name</button></div>;
    if (this.state.name.length > 0) {
      display = <div><span>{this.state.name}</span><button>Edit</button></div>
    }
    return (
      <div>
        <Header />
        <button>Create Your Own Collection</button>
        <form ref={(input) => this.gameForm = input} action="POST" onSubmit={(e) => this.handleSubmit(e)}>
          {display}
        </form>
        <h4>Choose a Collection:</h4>
        <table>
          <tbody>
            {collections.map((collection) => {
              return(
                <CollectionItem
                  name={collection.name}
                  createdBy={collection.createdBy}
                  key={collection.id}
                />

              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default NewGame;



// <CollectionItem
//   name={collection.name}
//   createdBy={collection.createdBy}
//   key={collection.id}
// />

// return (
//   <span>{this.state.name}</span>
// )

// const game = {

//   name: this.name.value,
//   // collection_id: ,
//   // user_id: ,
// }
// this.setState(game);
// console.log(this.state);
//this.props.addGame(game);

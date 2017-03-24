import React from 'react';
import Header from './Header';
import { collections } from '../seedData';
import CollectionItem from './CollectionItem';
import axios from 'axios';
import TeacherHome from './TeacherDashboard'

//make a new game - selecting collection [articles]
class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.updateCollectionID = this.updateCollectionID.bind(this);
    this.state = {
      name: '',
      collection_id: undefined,
      user_id: undefined,
      showElement: true,
    }
  }
  updateCollectionID(collection_id) {
    console.log("update", collection_id);
    this.setState({
      collection_id: collection_id
    }, () => {
      console.log(this.state);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      name: this.name.value,
      // user_id: 0, // TODO this will come from the session
      showElement: false,
    })
  }

  //sets showElement to true to display editable input box
  handleClick(e) {
    this.setState( {showElement : true} );
  }

  handleFinalSubmit(e) {
    e.preventDefault();
    this.addNewPost();
  }

  addNewPost() {
    console.log("addNewPost() function, fetching...?", this.state.name)
    axios.post('http://localhost:8888/games/api/addgame', {
      name: this.state.name,
      collection_id: this.state.collection_id,
      user_id: 1
    })
    .then((res) => {
      //redirect to TeacherDashboard and display new data at top of list
      console.log("response", res);
    })
    .then(() => {

    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    let display = <div><form ref={(input) => this.nameForm = input} onSubmit={(e) => this.handleSubmit(e)}><input ref={(input) => this.name = input} type="text" placeholder="Enter name of new game" defaultValue={this.state.name}></input><br/><button type="submit">Save name</button> </form></div>;

    let edit = <div><span>{this.state.name}</span><button onClick={this.handleClick}>Edit</button></div>

    return (
      <div>
        <Header />
        <button>Create Your Own Collection</button>
        <div>{this.state.showElement ? display : edit}</div>
        <h4>Choose a Collection:</h4>
        <form ref={(input) => this.gameForm = input} onSubmit={(e) => this.handleFinalSubmit(e)}>
        <table>
          <tbody>
            {collections.map((collection) => {
              return(
                <CollectionItem
                  name={collection.name}
                  createdBy={collection.createdBy}
                  key={collection.id}
                  id={collection.id}
                  updateCollectionID={this.updateCollectionID}
                />
              )
            })}
          </tbody>
        </table>
        <button type="submit">SAVE NEW GAME</button>
        </form>
      </div>
    )
  }
}
//

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

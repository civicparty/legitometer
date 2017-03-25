import React from 'react';
import CollectionItem from './CollectionItem';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      collections: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/collections/api')
      .then((res) => {
        this.setState({
          collections: res.data,
        })
      })
      .then(() => {
        console.log("but really what should go here?");
      })
      .catch((err) => {
        console.log(err);
      })

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
    //redirect to dashboard...how?
  }

  addNewPost() {
    console.log("addNewPost() function, fetching...?", this.state.name, this.state.collection_id)
    // collection id is 0 here... but it is 1 in the seed file...

    axios.post('http://localhost:8888/api/addgame', {
      name: this.state.name,
      collection_id: this.state.collection_id,
      user_id: 1
    })
    .then((res) => {
      // TODO redirect to TeacherDashboard and display new data at top of list
      console.log("response", res);
    })
    .catch((err) => {
      console.log("you are not going to space today", err);
    });
  }

  render() {
    let display = <div><form ref={(input) => this.nameForm = input} onSubmit={(e) => this.handleSubmit(e)}><input ref={(input) => this.name = input} type="text" placeholder="Enter name of new game" defaultValue={this.state.name}></input><br/><button type="submit">Save name</button> </form></div>;

    let edit = <div><span>{this.state.name}</span><button onClick={this.handleClick}>Edit</button></div>

    return (
      <div>
        <button>Create Your Own Collection</button>
        <div>{this.state.showElement ? display : edit}</div>
        <h4>Choose a Collection:</h4>
        <form ref={(input) => this.gameForm = input} onSubmit={(e) => this.handleFinalSubmit(e)}>
        <table>
          <tbody>
            {this.state.collections.map((collection) => {
              return(
                <CollectionItem
                  name={collection.name}
                  createdBy={collection.createdBy}
                  id={collection.id}
                  key={collection.id}
                  updateCollectionID={this.updateCollectionID}
                />
              )
            })}
          </tbody>
        </table>
        <Link to='/'>SAVE NEW GAME</Link>
        </form>
      </div>
    )
  }
}

export default NewGame;

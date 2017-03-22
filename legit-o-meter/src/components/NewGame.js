import React from 'react';
//import ReactDOM from 'react-dom';
import Header from './Header';
import { collections } from '../seedData';
import CollectionItem from './CollectionItem';

//make a new game - selecting collection [articles]
class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addNewPost = this.addNewPost.bind(this);
    this.state = {
      name: '',
      collection_id: undefined,
      user_id: this.props.user_id,
      showElement: true,
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    this.addNewPost();
    this.setState({
      name: this.name.value,
      collection_id: 0, // TODO this will come from the collection selection
      user_id: 0, // TODO this will come from the session
      showElement: false,

    })
  }

  handleClick(e) {
    console.log("um, now what?");
    this.setState( {showElement : true} );
    // TODO
    //change <span> to back to <input value="this.state.name">
    //change button back to SAVE
  }
  addNewPost() {
    console.log("addNewPost() function, fetching...?")
    fetch('/api/addgame', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'text/plain'}),
      mode: 'cors',
      redirect: 'follow'
    }).then((res) => {
      console.log("so, this worked. yay?", res, "new name:", this.state.name);
    }).catch((err) => {
      console.error("you suck and here is why: ", err);
    });
    // - api/addgame/ here
  }

  //     render : function() {
  //         if(this.state.showMe) {
  //             return (<div> one div </div>);
  //         } else {
  //             return (<a onClick={this.onClick}> press me </a>);
  //         }
  //     }
  // })
  render() {
    let display = <div><form ref={(input) => this.gameForm = input} onSubmit={(e) => this.handleSubmit(e)}><input ref={(input) => this.name = input} type="text" placeholder="Enter name of new game" defaultValue={this.state.name}></input><br/><button type="submit">Save name</button> </form></div>;

    let edit = <div><span>{this.state.name}</span><button onClick={this.handleClick}>Edit</button></div>


    // TODO --- form/handlesubmit on SELECT button not SAVE NAME???
        // <form ref={(input) => this.gameForm = input} onSubmit={(e) => this.handleSubmit(e)}></form>
        // <div>{this.state.showElement ? <InputBox /> : <p>hi</p>}</div>

    return (
      <div>
        <Header />
        <button>Create Your Own Collection</button>
        <div>{this.state.showElement ? display : edit}</div>
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

//make display component for input box
const InputBox = () => {
  return (
    <div>
      <p>here we are in the input box</p>
      <input ref={(input) => this.name = input} type="text" placeholder="Enter name of new game"></input>
      <br/>
      <button type="submit">Save name</button>
    </div>
  )
}

//make display component for span with name
const DisplayNewName = (name) => {
  return (
    <div>
      <span>{name}</span>
      <button>edit</button>
    </div>
  )
}
//      <button onClick={this.handleClick}>Edit</button>

// then you can do if ? <comp /> : <comp2 />

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

import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Header, Input, Label, Form, Table } from 'semantic-ui-react';
import CollectionItem from './CollectionItem';


//make a new game - selecting collection [articles]
class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.submitNewPost = this.submitNewPost.bind(this);
    this.updateCollectionID = this.updateCollectionID.bind(this);
    this.state = {
      name: null,
      collection_id: null,
      user_id: null,
      showEditTitle: true,
      collections: [],
      submitResult: null,
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
    this.setState({ collection_id: collection_id });
  }

  updateTitle(e) {
    e.preventDefault();

    const newName = () => {
      if (this.refs.input) {
        return this.refs.input.value
      } else {
        return this.state.name
      }
    };

    this.setState({
      showEditTitle: !this.state.showEditTitle,
      name: newName(),
      // user_id: 0, // TODO this will come from the session
    })
  }

  submitNewPost(e) {
    e.preventDefault();
    let thiz = this;
    axios.post('http://localhost:8888/api/addgame', {
      name: this.state.name,
      collection_id: this.state.collection_id,
      user_id: 1
    })
    .then((res) => {
      console.log("response", res);
      thiz.setState({ submitResult: true });
    })
    .catch((err) => {
      console.log("you are not going to space today", err);
    });

  }
  render() {
    let editTitle = (
        <div className="flex">
          <input ref="input"
            type="text" placeholder="Enter name of new game"
            defaultValue={this.state.name}
            className="bump-right"
          />
          <button className="ui button" type="submit">
            Save
          </button>
        </div>
    );

    let displayTitle = (
        <div className="flex">
          <span className="NewGame__title">
            {this.state.name}
          </span>
          <button className="ui button flex-right" type="submit">
            Edit Title
          </button>
        </div>
    );

    return (
      <div>
        { this.state.submitResult ? <Redirect to="/" /> : "" }

        <Header as="h1">New Game</Header>

        <form
          ref={(input) => this.nameForm = input}
          onSubmit={(e) => this.updateTitle(e)}
          className="ui form section"
        >
          <label htmlFor="gameTitle">Game Title</label>
          { this.state.showEditTitle ? editTitle : displayTitle }
        </form>

        {
          this.state.name ?
            <form
              ref={(input) => this.gameForm = input}
              onSubmit={(e) => this.submitNewPost(e)}
            >
              <Header as="h2" className="floated left">
                Choose a Collection
              </Header>

              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="2">
                      Choose an Exisiting Collection... OR
                    </Table.HeaderCell>
                    <Table.HeaderCell className="collapsing">
                      <Link to='collection/new' className="ui button primary right floated">
                        Create a New Collection
                      </Link>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.state.collections.map((collection) => {
                    return (
                      <CollectionItem
                        name={collection.name}
                        activeCollectionId={this.state.collection_id}
                        createdBy={collection.createdBy}
                        id={collection.id}
                        key={collection.id}
                        updateCollection={this.updateCollectionID}
                      />
                    )
                  })}
                </Table.Body>
              </Table>
              <button className="ui button positive" type="submit">
                Save New Game
              </button>
            </form>
            : ""
        }

      </div>
    )
  }
}

export default NewGame;

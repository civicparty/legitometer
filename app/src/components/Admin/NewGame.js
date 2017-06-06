import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Header, Table } from 'semantic-ui-react';
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
    axios.get('http://localhost:8888/api/casefiles')
      .then((res) => {
        console.log("api requesting", res.data);
        this.setState({
          collections: res.data,
        })
      })
      .then(() => {
        console.log("component mounted! casefile data retrieved!", this.state.collections);
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
      user_id: 1, // TODO this will come from the session
    })
  }

  submitNewPost(e) {
    e.preventDefault();
    let thiz = this;
    console.log("it should be here", this.state.collection_id); //it is
    axios.post('http://localhost:8888/api/add-mission', {
      name: this.state.name,
      casefile_id: this.state.collection_id,
      user_id: this.state.user_id,
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
            type="text" placeholder="Enter name of new mission"
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
            Edit Mission Name
          </button>
        </div>
    );

    return (
      <div>
        { this.state.submitResult ? <Redirect to="/" /> : "" }

        <Header as="h1">Create a New Mission</Header>

        <form
          ref={(input) => this.nameForm = input}
          onSubmit={(e) => this.updateTitle(e)}
          className="ui form section"
        >
          <label htmlFor="gameTitle">Mission Name</label>
          { this.state.showEditTitle ? editTitle : displayTitle }
        </form>

        {
          this.state.name ?
            <form
              ref={(input) => this.gameForm = input}
              onSubmit={(e) => this.submitNewPost(e)}
            >
              <Header as="h2">
                Choose a Case File
              </Header>

              <Header.Subheader>
                <p>A Case File is a collection of articles that your Team of Agents will investigate.</p>
              </Header.Subheader>


              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="2">
                      Choose an Exisiting Case File... OR
                    </Table.HeaderCell>
                    <Table.HeaderCell className="collapsing">
                      <Link to='collection/new' className="ui button primary right floated">
                        Create a New Case File
                      </Link>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {Object.keys(this.state.collections).map((key, id) => {
                    return (
                      <CollectionItem
                        name={this.state.collections[key][1]}
                        activeCollectionId={this.state.collections[key][0]}
                        createdBy={this.state.collections[key][2]}
                        id={id}
                        key={id}
                        updateCollection={this.updateCollectionID}
                      />
                    )
                  })}
                </Table.Body>
              </Table>
              <button className="ui button positive" type="submit">
                Save New Mission
              </button>
            </form>
            : ""
        }

      </div>
    )
  }
}

export default NewGame;

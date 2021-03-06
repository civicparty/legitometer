import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Header, Table } from 'semantic-ui-react';
import CollectionItem from './CollectionItem';

class NewMission extends React.Component {
  constructor(props) {
    super(props);
    this.updateTitle = this.updateTitle.bind(this);
    this.submitNewPost = this.submitNewPost.bind(this);
    this.updateCollectionID = this.updateCollectionID.bind(this);
    this.saveMission = this.saveMission.bind(this);

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
    axios.get('/api/casefiles')
      .then((res) => {
        this.setState({ collections: res.data });
      })
      .catch((err) => {
        console.log(err);
      })

  }

  saveMission(newName) {
    // e.preventDefault();
    // add new mission with name (update with casefile_id later)
    // this to use inside of axios call
    let thiz = this;
    console.log("saving mission name");
    axios.post('/api/add-mission', {
      name: newName,
      user_id: 1,
    })
    .then((res) => {
      console.log("response THEN saveMission", res);
      thiz.setState({ submitResult: false });
    })
    .catch((err) => {
      console.log("you are not going to space today (saveMission)", err);
    });
  }

  updateCollectionID(collection_id) {
    this.setState({ collection_id: collection_id });
  }

  updateTitle(e) {
    e.preventDefault();
    const newName = this.refs.input ? this.refs.input.value : this.state.name;

    this.setState({
      showEditTitle: !this.state.showEditTitle,
      name: newName,
      user_id: 1, // TODO this will come from the session
    })
    this.saveMission(newName);
    console.log("updating the title", this.state.name, this.refs.input.value);

    console.log("new name", newName);

  }

  submitNewPost(e) {
    console.log("submit new post", this.state.collection_id);
    e.preventDefault();
    console.log("prevented default");
    let thiz = this;

    console.log("about to add mission", this.state);

    axios.patch('/api/update-mission', {
      name: this.state.name,
      casefile_id: this.state.collection_id - 1,
      user_id: this.state.user_id,
    })
    .then((res) => { //TODO it doesn't seem to be getting here...
      console.log("response THEN submitNewPost", res);
      thiz.setState({ submitResult: true });
      console.log("and hereeee...call redirect function...");
      // this.handleRedirect(res);
    })

    .catch((err) => {
      console.log("you are not going to space today (submitNewPost)", err);
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
          <button className="ui button" type="submit" onClick={(e) => this.updateTitle(e)}>
            Save
          </button>
        </div>
    );

    let displayTitle = (
        <div className="flex">
          <span className="NewMission__title">
            {this.state.name}
          </span>
          <button className="ui button flex-right" type="submit">
            Edit Mission Name
          </button>
        </div>
    );
    const { submitResult } = this.state;

    return (
      <div>

        <Header as="h1">Create a New Mission</Header>

        <form
          ref={(input) => this.nameForm = input}
          className="ui form section"
        >
          <label htmlFor="gameTitle">Mission Name</label>
          { this.state.showEditTitle ? editTitle : displayTitle }
        </form>
        {submitResult && (
          <Redirect to={'/admin'}/>
        )}
        {/* TODO: Refactor this code using AddCollectionToMission component */}
        {
          this.state.name ?
          <div>
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
                      <Link to='/admin/collection/new' className="ui button primary right floated">
                        Create a New Case File
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
              <button className="ui button positive" type="button" onClick={(e) => this.submitNewPost(e)}>
                Save New Mission
              </button>
              </div>
            : ""
        }

      </div>
    )
  }
}

export default NewMission;

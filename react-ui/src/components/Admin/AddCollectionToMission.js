import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import CollectionItem from './CollectionItem';
import { Header, Table } from 'semantic-ui-react';

class AddCollectionToMission extends Component {
  constructor(props) {
    super(props);
    this.updateCollectionID = this.updateCollectionID.bind(this);
    this.submitNewPost = this.submitNewPost.bind(this);

    this.state = {
      collections: [],
      collection_id: (this.props.mission && this.props.mission.casefile_id) || null,
      name: this.props.mission && this.props.mission.name,
      submitResult: false,
    }
  }

  updateCollectionID(collection_id) {
    this.setState({ collection_id: collection_id });
  }

  submitNewPost(e) {
    e.preventDefault();
    let thiz = this;

    axios.patch('/api/update-mission', {
      name: this.state.name,
      casefile_id: this.state.collection_id - 1,
      user_id: this.state.user_id,
    })
    .then((res) => thiz.setState({ submitResult: true }))
    .catch((err) => console.log("error in updating mission: ", err));
  }

  componentDidMount() {
    axios.get('/api/casefiles')
      .then((res) => this.setState({ collections: res.data }))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.submitResult && (
          <Redirect to={'/admin'}/>
        )}
          <Header as="h3">
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
              {Object.keys(this.state.collections).map((key, id) => {
                return (
                  <CollectionItem
                    name={this.state.collections[key][1]}
                    activeCollectionId={this.state.collection_id}
                    createdBy={this.state.collections[key][2]}
                    id={id + 1}
                    key={id}
                    updateCollection={this.updateCollectionID}
                  />
                )
              })}
            </Table.Body>
          </Table>
          <button className="ui button positive" type="button" onClick={(e) => this.submitNewPost(e)}>
            Save Mission
          </button>
        </div>
    );
  }

}

export default AddCollectionToMission;

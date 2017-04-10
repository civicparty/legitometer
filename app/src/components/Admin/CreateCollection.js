import React from 'react';
import axios from 'axios';
import { Header, Icon } from 'semantic-ui-react';

import ArticleInput from './ArticleInput';

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.addInput = this.addInput.bind(this);
    this.submitNewCollection = this.submitNewCollection.bind(this);
    this.state = {
      collectionName: '',
      articles: [],
    }
  }
  handleInput() {
    console.log("handling input");
  }

  addInput(event) {
    event.preventDefault();

    this.setState({
      inputList: this.state.inputs.push(
        <ArticleInput
          key={this.state.inputs.length}
          handleInput={this.handleInput}
        />
      )
    });
  }

  handleChange() {
    console.log("making changes");
    this.setState({collectionName: this.collectionName.value})
  }

  submitNewCollection(e) {
    e.preventDefault();
    debugger
    console.log("submitted!", this.collectionName.value);
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.submitNewCollection()} className="ui form section">

          <div className="section">
            <Header as="h1">New Case File</Header>
            <label htmlFor="collectionName">Case File Title</label>
            <input type="text" name="collectionName" placeholder="Case File Title" value={this.collectionName} onChange={this.handleChange}/>
          </div>

          <div className="section">
            <Header as="h2">Add Articles</Header>
            <ArticleInput handleInput={this.handleInput}/>
            {this.state.inputs}
            <button onClick={this.addInput} className="ui button primary tiny">
              <Icon name="plus"/> Add Another Article
            </button>
          </div>

          <button type="submit" className="ui button positive huge">
            Save Case File
          </button>
        </form>
      </div>
    )
  }
}

export default CreateCollection;

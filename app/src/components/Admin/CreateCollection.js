import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import ArticleInput from './ArticleInput';
class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.addInput = this.addInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      collectionName: '',
      headlines: [],
      urls: [],
      inputs: [],
    }
  }
  handleInput() {
    console.log("handling input");
  }

  addInput(event) {
    event.preventDefault();
    const inputList = this.state.inputs;
    this.setState({
      inputList: inputList.push(<FormInput key={inputList.length} handleInput={this.handleInput}/>)
    });
  }

  handleChange() {
    console.log("making changes");
    this.setState({collectionName: this.collectionName.value})
  }

  handleSubmit(e) {
    //e.preventDefault();
    console.log("submitted!", this.collectionName.value);
  }

  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit()} className="ui form section">

          <div className="section">
            <Header as="h1">New Collection</Header>
            <label htmlFor="collectionName">Collection Title</label>
            <input type="text" name="collectionName" placeholder="Collection Title" value={this.collectionName} onChange={this.handleChange}/>
          </div>

          <div className="section">
            <Header as="h2">Add Articles</Header>
            <FormInput handleInput={this.handleInput}/>
            {this.state.inputs}
            <button onClick={this.addInput} className="ui button primary tiny">
              <Icon name="plus"/> Add Another Article
            </button>
          </div>

          <button type="submit" className="ui button positive huge">
            Save Collection
          </button>
        </form>
      </div>
    )
  }
}

export default CreateCollection;

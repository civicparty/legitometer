import React from 'react';
import FormInput from './FormInput';

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
        <form onSubmit={(e) => this.handleSubmit()}>
          <input type="text" placeholder="Collection Name" value={this.collectionName} onChange={this.handleChange}/><br/><br/>
          <FormInput handleInput={this.handleInput}/>
          {this.state.inputs}
          <button onClick={this.addInput}>Add Article</button><br/><br/>
          <button type="submit">Save Collection</button>
        </form>
      </div>
    )
  }
}

export default CreateCollection;

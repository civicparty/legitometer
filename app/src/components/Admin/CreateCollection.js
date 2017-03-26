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

  addInput(event) {
    event.preventDefault();
    const inputList = this.state.inputs;
    this.setState({
      inputList: inputList.push(<FormInput key={inputList.length} />)
    });
  }


  handleSubmit(e) {
    //e.preventDefault();
    console.log("submitted!", this.collectionName.value);
  }
//ref={(input) => this.collectionForm = input}
  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit()}>
          <input ref={(input) => this.collectionName = input} type="text" placeholder="Collection Name" value={this.collectionName} /><br/><br/>
          <FormInput />
          {this.state.inputs}
          <button onClick={this.addInput}>Add Article</button><br/><br/>
          <button type="submit">Save Collection</button>
        </form>
      </div>
    )
  }
}

export default CreateCollection;

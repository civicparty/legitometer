import React from 'react';

class FormInput extends React.Component {
//const FormInput = () => {
  handleChange() {
    //pass props
    console.log("formInput handleChange()");
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Article Name" onChange={this.handleInput} />
        <input type="text" placeholder="Article URL" onChange={this.handleInput}/>
      </div>
    )
  }
}


export default FormInput;

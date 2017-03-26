import React from 'react';

class FormInput extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
      return (
    <div>
      <input type="text" placeholder="Article Name" ref={(input) => this.articleName = input}/>
      <input type="text" placeholder="Article URL" ref={(input) => this.articleURL = input}/>
    </div>
  )
}
}

export default FormInput;

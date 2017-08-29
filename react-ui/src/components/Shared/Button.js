import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <button className="button">
        {this.props.text}
      </button>
    );
  }

}

export default Button;

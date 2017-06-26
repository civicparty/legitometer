import React, { Component } from 'react';

class QuestionPagingArrows extends Component {

  render() {
    const { previous, next } = this.props;

    const wrapperCss = {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '15px 20px',
    }
    const buttonCss = {
      height: '30px',
      width: '30px',
      margin: '0 5px',
      padding: '4px',
      textAlign: 'center',
      borderRadius: '3px',
    }
    const nextButtonCss = Object.assign({
      backgroundColor: '#93D0F1',
      color: 'white',
    }, buttonCss)
    const previousButtonCss = Object.assign({
      backgroundColor: '#C5E3F4',
      color: 'white',
    }, buttonCss)

    return (
      <div style={wrapperCss}>
        <div style={previousButtonCss}>
          &lt;
        </div>
        <div style={nextButtonCss}>
          &gt;
        </div>
      </div>
    );
  }

}

export default QuestionPagingArrows;

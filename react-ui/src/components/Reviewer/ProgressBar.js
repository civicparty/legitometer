import React, { Component } from 'react';

class ProgressBar extends Component {

  render() {
    const { x, y } = this.props;
    const percentDone = x / y * 100;

    const fullBarCss = {
      border: '1px solid #EEEDF7',
      borderRadius: '3px',
      padding: '3px',
      width: '50%',
      height: '20px',
      margin: '20px 5px 20px 20px',
    }

    const progressBarCss = {
      width: percentDone > 5 ? `${percentDone}%` : '5%',
      backgroundColor: 'blue',
      borderRadius: '10px',
      height: '12px',
    }

    return (
      <div className="text-center flex" style={{padding: '2px'}}>
        <div style={fullBarCss}>
          <div style={progressBarCss}></div>
        </div>
        <span style={{padding: '20px 0'}}>{`${percentDone}% completed`}</span>
      </div>
    );
  }

}

export default ProgressBar;

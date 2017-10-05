import React, { Component } from 'react';

class ProgressBar extends Component {

  render() {
    const { x, y } = this.props;
    const percentDone = x / y * 100;

    const fullBarCss = {

    }

    const progressBarCss = {
      width: percentDone > 5 ? `${percentDone}%` : '5%',
    }

    return (
      <div className="ProgressBar flex">
        <div className="ProgressBar__full-bar">
          <div style={progressBarCss} className="ProgressBar__progress"></div>
        </div>
        <span className="ProgressBar__text">{`${percentDone}% completed`}</span>
      </div>
    );
  }

}

export default ProgressBar;

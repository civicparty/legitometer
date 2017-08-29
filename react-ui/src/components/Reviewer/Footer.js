import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import QuestionPagingArrows from './QuestionPagingArrows';
import legitCatImage from '../../images/legit-cat.png';

class Footer extends Component {

  render() {
    const barStyles = {
      backgroundColor: '#F7F7F7',
      height: '60px',
    }
    const imgStyles = {
      width: '100px',
      height: '100px',
      position: 'absolute',
      bottom: 0,
    }
    const titleCss = {
      paddingLeft: '115px'
    }
    const footerTitleCss = {
      flex: 1
    }
    const progressBarCss = {
      flex: 1
    }
    const navigationCss = {
      flex: 1
    }

    const currentPath = this.props.location.pathname.split('/')
    const currentId = Number(currentPath[currentPath.length - 1])

    return (
      <div className="flex" style={barStyles}>
        <div style={footerTitleCss}>
          <img src={legitCatImage} alt="Legit Cat mascot" style={imgStyles} />
          <h3 style={titleCss}>Legit-O-Meter</h3>
        </div>
        <div style={progressBarCss}>
          <ProgressBar x={0} y={10} />
        </div>
        <div style={navigationCss}>
          <QuestionPagingArrows currentId={currentId} />
        </div>
      </div>
    );
  }

}

export default Footer;

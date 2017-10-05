import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import QuestionPagingArrows from './QuestionPagingArrows';
import legitCatImage from '../../images/legit-cat.png';

class Footer extends Component {

  render() {
    const currentPath = this.props.location.pathname.split('/')
    const currentId = Number(currentPath[currentPath.length - 1])

    return (
      <div className="flex Footer">
        <div className="flex1">
          <img src={legitCatImage} alt="Legit Cat mascot"
            className="Footer__img"
           />
          <h3 className="Footer__title">Legit-O-Meter</h3>
        </div>
        <div className="flex1">
          <ProgressBar x={0} y={10} />
        </div>
        <div className="flex1">
          <QuestionPagingArrows currentId={currentId} />
        </div>
      </div>
    );
  }

}

export default Footer;

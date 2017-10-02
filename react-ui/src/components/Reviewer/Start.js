import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';

class Start extends Component {

  render() {
    const { id } = this.props.match.params;

    return (
      <div className="ReviewerStart">
        <div className="ReviewerStart__body">
          <h1 className="ReviewerStart__header header">Legit or Not</h1>
          <img src={legitCatImage} alt="Legit Cat Welcomes You" />
          <h2 className="subheader">You’ll read 3 different articles and figure out which ones are legit.</h2>
          <p className="tip">We'll ask you questions to help you determine the answer.</p>
        </div>
        <Link to={`/mission/${id}/team`}>
          <Button text="Let’s Get Started" />
        </Link>
      </div>

    );
  }

}

export default Start;

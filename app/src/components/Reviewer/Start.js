import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';

class Start extends Component {
  render() {

    return (

      <div className="container">

        <img src={legitCatImage} alt="Legit Cat Welcomes You" />
        <h1>You’ll read 3 different articles and figure out which ones are legit.</h1>
        <p className="tip">We’ll ask questions to help you figure out the answer.</p>

        <Link to="/article/1">
          <Button text="Let’s Get Started" />
        </Link>

      </div>

    );
  }

}

export default Start;

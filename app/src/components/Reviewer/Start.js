import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';



class Start extends Component {
  render() {
    const bodyStyles = { marginBottom: "50px" }

    return (
      <div className="text-center">
        <div style={bodyStyles}>
          <img src={legitCatImage} alt="Legit Cat Welcomes You" />
          <h1>You’ll evaluate 3 different articles and figure out which ones are legit.</h1>
          <p>We’ll ask you questins to help you determine the answer. <a href="#"> Testing this Crazy shit out dog</a></p>
        </div>
        <Link to="/article/1">
          <Button text="Let's Get Started" />
        </Link>
      </div>

    );
  }

}

export default Start;

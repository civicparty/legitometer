import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';

class Start extends Component {

  render() {
    const bodyStyles = { marginBottom: '50px' }
    const headerStyles = { position: 'absolute', top: '120px', left: '60%' }
    const divStyles = {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
    }

    return (
      <div className="text-center" style={divStyles}>
        <div style={bodyStyles}>
          <h1 style={headerStyles}>Legit-o-Meter</h1>
          <img src={legitCatImage} alt="Legit Cat Welcomes You" />
          <h1>You’ll read 3 different articles and figure out which ones are legit.</h1>
          <p className="tip">We'll ask you questins to help you determine the answer.</p>
        </div>        <Link to="/article/1">
          <Button text="Let’s Get Started" />
        </Link>

      </div>

    );
  }

}

export default Start;

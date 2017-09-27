import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';

class GroupNames extends Component {
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
          <form>
            <h1>Enter your group name: </h1><input type="text" name="groupname"></input>
            <p>new lines will appear here to input individual names... Hoooooow?</p>
            <Link to="/article/1">
              <Button text="Let’s Go" />
            </Link>
          </form>
        </div>


      </div>

    );
  }
}

export default GroupNames;

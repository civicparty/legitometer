import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';

class GroupNames extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      groupName: '',
      names: [],
    }
  }

  handleChange() {
    // save group name to state
  }

  handleSubmit() {
    // POST to groups table - save groupname & each individual name to the database
    axios.post('/api/add-group', {
      group: this.state.groupName,
      names: this.state.names,
    })
    .then((response) => {
      console.log("post groups success", response);
    })
    .catch((err) => {
      console.log("error", err);
    })
  }

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
          <form onSubmit={this.handleSubmit}>
            <h1>Enter your group name: </h1><input type="text" name="groupname" onChange={this.handleChange}></input>
            {/* save group name to state
               save each individual name to state and create a new input line when one is filled in */}
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

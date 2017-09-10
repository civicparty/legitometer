import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewList from './ReviewList';


class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      missions: [],
      casefiles: [],
    }
  }

  componentDidMount() {
    // GET missions assigned to student user
    axios.get('/api/missions')
      .then((res) => {
        // loop through the result object and set the state
        for(let key in res.data) {
          // assign state to temp arrays
          let temp_mission = this.state.missions.slice();
          let temp_casefile = this.state.casefiles.slice();
          // push data to arrays
          temp_mission.push(key);
          temp_casefile.push(res.data[key]);
          // set the state
          this.setState({
            missions: temp_mission,
            casefiles: temp_casefile,
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }
  render() {
    return (
      <div>
        <h1>Operation Legit-or-Not</h1>
        <h2>Select Your Missions</h2>
        {Object.keys(this.state.missions).map((key, id) => {
          return (
            <ReviewList
              name={this.state.missions[key]}
              collection={this.state.casefiles[key]}
              id={id}
              key={id}
            />
          )
        })}
      </div>
    )
  }
}

export default StudentDashboard;

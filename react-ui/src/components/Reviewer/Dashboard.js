import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewList from './ReviewList';


class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      missions: [],
    }
  }

  componentWillMount() {
    axios.get('/api/missions')
      .then((res) => {
        this.setState({
          missions: res.data,
        })
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
        {this.state.missions.map((mission, i) => {
          return (
            <ReviewList
              mission={mission}
              id={mission.missionId}
              key={mission.missionId}
            />
          )
        })}
      </div>
    )
  }
}

export default StudentDashboard;

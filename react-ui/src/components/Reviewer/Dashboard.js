import React from 'react';
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
      <div style={{ textAlign: 'center' }}>
        <h1 className="header">Mission: Information</h1>
        <h2><span className="header text-center">Legit or Not</span></h2>
        <h3 className="subheader">Select from Your Missions</h3>
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

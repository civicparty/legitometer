import React from 'react';
import Game from './Game';
import Header from './Header';

class TeacherDashboard extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
      console.log(this.state.teacherLoggedIn);
    return (
      <div className="dashboard">
        <Header />
        <h1>Teacher Dashboard</h1>
        <button className="dashboardButton"><a href="">Start a new game</a></button><br />
        <h3 className="dashboardTitle">Your Games</h3>
        <ul className="gameList">
          <Game />
          <Game />
          <Game />
        </ul>
      </div>
    )
  }
}

export default TeacherDashboard;

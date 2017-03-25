import React from 'react';
import Header from '../Shared/Header'

class StudentDashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Student Dashboard</h3>
        <h6>links displayed dynamically</h6>
        <h6><a href="">game link - links to form with random article</a></h6>
        <h6>react-router to route links to proper components</h6>
        <h6><a href="">game link - links to form with random article</a></h6>
        <h6><a href="">game link - links to form with random article</a></h6>
      </div>
    )
  }
}

export default StudentDashboard;

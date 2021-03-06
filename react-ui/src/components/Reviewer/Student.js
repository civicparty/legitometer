import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import GroupNames from './GroupNames';
import Dashboard from './Dashboard';
import StudentForm from './StudentForm';
import Mission from './Mission';
import Complete from './Complete';
// import Questions from './Questions';

class Student extends Component {

  render() {
    const wrapperCss = { width: '100%', height: '100%', paddingTop: '40px' };

    return (
      <div style={wrapperCss}>
        <Route exact path="/" component={Dashboard} />
        <Route path="/mission/:id/casefile/:casefile_id" component={Mission} />
        <Route path="/mstestteacher/1" component={StudentForm} />
        <Route path="/form" component={StudentForm} />
        <Route path="/mission/complete" component={Complete} />
      </div>
    );
  }

}

export default Student;

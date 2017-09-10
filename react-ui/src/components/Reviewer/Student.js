import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Start from './Start';
import GroupNames from './GroupNames';
import Dashboard from './Dashboard';
import StudentForm from './StudentForm';
import Article from './Article';

class Student extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/article/:id/start" component={Start} />
        <Route exact path="/article/:id" component={Article} />
        <Route path="/enter-names" component={GroupNames} />
        <Route path="/mstestteacher/1" component={StudentForm} />
        <Route path="/form" component={StudentForm} />
      </div>
    );
  }

}

export default Student;

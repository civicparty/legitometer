import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import NewMission from './NewMission';
import Dashboard from './Dashboard';
import Mission from './Mission';
import CreateCollection from './CreateCollection';
import Articles from './Articles';
import ViewCasefile from './ViewCasefile';
class Admin extends Component {

  render() {
    return (
      <Router>
        <div style={{ width: '100%', height: '100%', padding: '40px' }}>
          <p>welcome Teacher</p>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/new-mission/" component={NewMission} />
          <Route path="/admin/mission/:id" component={Mission} />
          <Route path="/admin/collection/new" component={CreateCollection} />
          <Route path="/admin/collection/:id/articles" component={Articles} />
          <Route path="/admin/casefile/:id" component={ViewCasefile} />
        </div>
      </Router>
    );
  }

}

export default Admin;

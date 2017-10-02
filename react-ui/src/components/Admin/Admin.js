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
class Admin extends Component {

  render() {
    return (
      <Router>
        <div>
          <p>welcome Teacher</p>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/admin/new-mission/" component={NewMission} />
          <Route path="/admin/mission/:id" component={Mission} />
          <Route path="/admin/collection/new" component={CreateCollection} />
          <Route path="/admin/collection/:id/articles" component={Articles} />
        </div>
      </Router>
    );
  }

}

export default Admin;

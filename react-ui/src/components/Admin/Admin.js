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
import Reviews from './Reviews';
import Responses from './Responses';
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
          <Route path="/admin/reviews/:mission_id" component={Reviews} />
          <Route path="/admin/responses/:review_id" component={Responses} />
        </div>
      </Router>
    );
  }

}

export default Admin;

import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import NewGame from './NewGame';
import Dashboard from './Dashboard';
import Mission from './Mission';
import CreateCollection from './CreateCollection';

class Admin extends Component {

  render() {
    return (
      <Router>
        <div>
          <p>welcome Teacher</p>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/admin/new" component={NewGame} />
          <Route path="/admin/mission/:id" component={Mission} />
          <Route path="/admin/collection/new" component={CreateCollection} />
        </div>
      </Router>
    );
  }

}

export default Admin;

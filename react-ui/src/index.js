import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import './scss/index.css';

import Admin from './components/Admin/Admin';
import Student from './components/Reviewer/Student'

class Root extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 1,
      games: {},
    }
  }

  render(){
    return (
      <Router>
        <div className="flex-parent">
          {/* <Header toggleExperience={this.toggleExperience} isTeacher={this.state.teacherLoggedIn} /> */}
          <div className="App text container">
            {/*
              TODO: Students shouldn't be able to hit admin paths. They should be "ProtectedRoutes".

              See this implementation:
              https://reacttraining.com/react-router/web/example/auth-workflow
            */}
            {
              <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/" component={Student} />
              </Switch>
            }
          </div>
        </div>
      </Router>
    )
  }
}

render(<Root/>, document.querySelector('#root'));

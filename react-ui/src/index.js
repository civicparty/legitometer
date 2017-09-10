import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import './scss/index.css';

// Admin Components
import Admin from './components/Admin/Admin';

// Reviewer Components
import Start from './components/Reviewer/Start';
import GroupNames from './components/Reviewer/GroupNames';
import StudentDashboard from './components/Reviewer/Dashboard';
import StudentForm from './components/Reviewer/StudentForm';
import Article from './components/Reviewer/Article';

// Shared Components
import Login from './components/Shared/Login'
import Header from './components/Shared/Header';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      user_id: 1,
      games: {},
    }
  }

  render(){
    console.log("this is a test");

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

                  <Route exact path="/" component={StudentDashboard} />
                  <Route path="/start" component={Start} />
                  <Route path="/enter-names" component={GroupNames} />
                  <Route path="/article/:id" component={Article} />
                  <Route path="/mstestteacher/1" component={StudentForm} />
                  <Route path="/form" component={StudentForm} />
                  <Redirect to="/" />
                </Switch>
            }
          </div>
        </div>
      </Router>
    )
  }
}

render(<Root/>, document.querySelector('#root'));

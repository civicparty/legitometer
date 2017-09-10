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
import NewGame from './components/Admin/NewGame';
import TeacherDashboard from './components/Admin/Dashboard';
import Mission from './components/Admin/Mission';
import CreateCollection from './components/Admin/CreateCollection';

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
    this.renderExperience = this.renderExperience.bind(this);
    this.toggleExperience = this.toggleExperience.bind(this);
    this.state = {
      teacherLoggedIn: false,
      user_id: 1,
      studentLoggedIn: true,
      games: {},
    }
  }

  toggleExperience() {
    this.setState({
      teacherLoggedIn: !this.state.teacherLoggedIn,
      studentLoggedIn: !this.state.studentLoggedIn,
    })
  }

  renderExperience() {
    const { teacherLoggedIn, studentLoggedIn } = this.state;
    // TODO change to get isAdmin from user database
    let display = <Login />;
    if (teacherLoggedIn) {
      display = <TeacherDashboard />;
     } else if (studentLoggedIn){
      display = <StudentDashboard />;
    }
    const experienceCss = {
      flex: 1,
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
    return (
      <div style={experienceCss}>
        {display}
      </div>
    );
  }


  render(){
    console.log("this is a test");

    return (
      <Router>
        <div className="flex-parent">
          <Header toggleExperience={this.toggleExperience} isTeacher={this.state.teacherLoggedIn} />
          <div className="App text container">
            {/*
              I'm not feeling sure about this pattern. But the idea here is that
              when you land on the / path, we render your dashboard based on
              the experience. Admin/Teacher vs Reviewer/Student. Then we have
              certain paths for admins vs reviewers. Might be better if all
              admin paths start with "/admin". Also students shouldn't be able
              to hit admin paths. They should be "ProtectedRoutes".

              See this implementation:
              https://reacttraining.com/react-router/web/example/auth-workflow
            */}
            {
              this.state.teacherLoggedIn &&
                <Switch>
                  <Route exact path="/" component={TeacherDashboard} />
                  <Route path="/new" component={NewGame} />
                  <Route path="/mission/:id" component={Mission} />
                  <Route path="/collection/new" component={CreateCollection} />
                </Switch>
            }
            {
              this.state.studentLoggedIn &&
                <Switch>
                  <Route exact path="/" component={StudentDashboard} />
                  <Route path="/start" component={Start} />
                  <Route path="/enternames" component={GroupNames} />
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

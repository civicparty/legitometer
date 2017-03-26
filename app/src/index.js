import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './index.css';
import NewGame from './components/Admin/NewGame';
import Login from './components/Shared/Login'
import TeacherDashboard from './components/Admin/Dashboard';
import StudentDashboard from './components/Reviewer/Dashboard';
import StudentForm from './components/Reviewer/StudentForm';
import Game from './components/Admin/Game';
import Header from './components/Shared/Header';
import CreateCollection from './components/Admin/CreateCollection';

class Root extends Component {
  constructor() {
    super();
    this.toggleExperience = this.toggleExperience.bind(this);
    this.state = {
      teacherLoggedIn: false,
      user_id: 1,
      studentLoggedIn: true,
      games: {},
    }
  }

  toggleExperience() {
    const teacher = this.state.teacherLoggedIn;
    const student = this.state.studentLoggedIn;
    // TODO change to get isAdmin from user database
    let display = <Login />;
    if (teacher) {
      display = <TeacherDashboard />;
     } else if (student){
      display = <StudentDashboard />;
    }
    return (
      <div>
        {display}
      </div>
    );
  }


  render(){
    return (
      <Router>
        <div>
          <Header />
          <div className="App ui text container">
            <Switch>
                <Route exact path="/" render={this.toggleExperience} />
                <Route path="/new" component={NewGame} />
                <Route path="/game/:id" component={Game} />
                <Route path="/form" component={StudentForm} />
                <Route path="/collection/new" component={CreateCollection} />
                <Route path="/collection/new" component={CreateCollection} />
                <Route path="/mstestteacher/1" component={StudentForm} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

render(<Root/>, document.querySelector('#root'));

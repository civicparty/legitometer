import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import './index.css';
import App from './App';
import NewGame from './components/NewGame';
import Login from './components/Login'
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';



class Root extends Component {
  constructor() {
    super();
    this.state = {
      teacherLoggedIn: true,
      studentLoggedIn: false,
    }
  }

  toggleExperience() {
    const teacher = this.state.teacherLoggedIn;
    const student = this.state.studentLoggedIn;
    let display = <Login />;
    if (teacher) {
      display = <TeacherDashboard />;
     } else if (student){
      display = <StudentDashboard />;
    }
    return (
      <div className="App">
        {display}
      </div>
    );
  }

  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact pattern="/" render={this.toggleExperience.bind(this)} />
            <Route pattern="/game/new" component={NewGame}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

render(<Root/>, document.querySelector('#root'));

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

class Root extends Component {
  constructor() {
    super();
    this.toggleExperience = this.toggleExperience.bind(this);
    this.state = {
      teacherLoggedIn: true,
      user_id: 1,
      studentLoggedIn: false,
      games: {},
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
          <Header />
          <Switch>
            <Route exact path="/" render={this.toggleExperience} />
            <Route path="/new" component={NewGame} />
            <Route path="/game/:id" component={Game} />
            <Route path="/form" component={StudentForm} />
          </Switch>
        </div>
      </Router>
    )
  }
}



render(<Root/>, document.querySelector('#root'));

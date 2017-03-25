import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import './index.css';
//import App from './App';
import NewGame from './components/NewGame';
import Login from './components/Login'
import TeacherHome from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import StudentForm from './components/StudentForm';
import Game from './components/Game';

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
    let display = <Login />;
    if (teacher) {
      display = <TeacherHome />;
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

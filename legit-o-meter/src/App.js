import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import StudentForm from './components/StudentForm';
//import Header from './components/Header';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
// import Game from './components/Game'
import base from './base';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teacherLoggedIn: false,
      studentLoggedIn: false,
    }
  }

  render() {
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
}

export default App;

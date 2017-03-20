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
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
//  import StudentForm from './components/StudentForm';
import Game from './components/Game';
import CreateGame from './components/CreateGame';



class Root extends Component {
  constructor() {
    super();
    this.toggleExperience = this.toggleExperience.bind(this);
    this.addGame = this.addGame.bind(this);
    this.state = {
      teacherLoggedIn: true,
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
  addGame(game) {
    // update state
      // make a copy of the state
    const games = {...this.state.games};
      //add in game
    games[`name`] = game;
    // set state
    this.setState({ games })
    console.log(games);
  }

  render(){
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" render={this.toggleExperience} />
            <Route path="/new" component={NewGame} />
            <Route path="/game/:id" component={Game} />
            <Route path="/create" component={CreateGame} />
          </Switch>
        </div>
      </Router>
    )
  }
}



render(<Root/>, document.querySelector('#root'));

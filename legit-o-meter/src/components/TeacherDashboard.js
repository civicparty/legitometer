import React from 'react';
import GameListItem from './GameListItem';
import Header from './Header';
// import NewGame from './NewGame';
import { Link } from 'react-router-dom';
//import { collections } from '../seedData';
import axios from 'axios';

class TeacherHome extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
    }
  }

componentDidMount() {
    //get user data from database
  axios.get('http://localhost:8888/games/api')
      .then((res) => {
        console.log("get", res.data);
        this.setState({
          games: res.data,
        })
      })
      .then(() => {
        console.log("louis is needy", this.state);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
   return (
    <div>
    <Header/>
      <h1>Teacher Dashboard</h1>
      <Link to='new'>New Game</Link>
      <h3 className="dashboardTitle">Your Games</h3>
      <table className="gameList">
        <tbody>

          {this.state.games.map((game) => {
            // TODO - Change collection to get object by ID not index
            return(
              <GameListItem
                name={game.name}
                collection={game.collections_id}
                id={game.id}
                key={game.id}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
}

export default TeacherHome;

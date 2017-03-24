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
      collections: [],
    }
  }

componentDidMount() {
    //get user data from database
  axios.get('http://localhost:8888/games/api')
      .then((res) => {
        //console.log("get", res.data);
        this.setState({
          games: res.data[0],
          collections: res.data[1]
        })
      })
      .then(() => {
        //console.log("louis is needy", this.state.collections);
        for (let key in this.state.collections) {
          //console.log(this.state.collections[key].name );
          // can i add this to games??? - can't mutate state directly
          //make a copy...
          const games = {...this.state.games}
          games[key].coll_name = this.state.collections[key].name
          //console.log("games", games[key]);
          this.setState( games );
        }
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
                collection={game.coll_name}
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

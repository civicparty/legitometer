import React from 'react';
import GameListItem from './GameListItem';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AdminDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
      collections: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/games/api')
      .then((res) => {
        this.setState({
          games: res.data[0],
          collections: res.data[1]
        })
      })
      .then(() => {
        for (let key in this.state.collections) {
          // make a copy of games
          const games = {...this.state.games}
          // add collection name to game object
          games[key].coll_name = this.state.collections[key].name
          // set state of games
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
        <h1>Teacher Dashboard</h1>
        <Link to='new'>New Game</Link>
        <h3 className="dashboardTitle">Your Games</h3>
        <table className="gameList">
          <tbody>
            {this.state.games.map((game) => {
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

export default AdminDashboard;

import React from 'react';
import GameListItem from './GameListItem';
import Header from './Header';
import { Link } from 'react-router-dom';
import { userData, collections } from '../seedData'

class TeacherDashboard extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div className="dashboard">
        <Header />
        <h1>Teacher Dashboard</h1>
        <Link to='/game/new'>New Game</Link>
        <h3 className="dashboardTitle">Your Games</h3>
        <table className="gameList">
          <tbody>
            {userData.user.games.map((game) => {
              // TODO - Change collection to get object by ID not index
              return(
                <GameListItem
                  name={game.name}
                  collection={collections[game.collectionId]}
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

export default TeacherDashboard;

import React from 'react';
import GameListItem from './GameListItem';
import Header from './Header';
// import NewGame from './NewGame';
import { Link } from 'react-router-dom';
import { userData, collections } from '../seedData'

const TeacherHome = () => {
  // debugger
  return (
    <div>
    <Header/>
      <h1>Teacher Dashboard</h1>
      <Link to='new'>New Game</Link>
      <h3 className="dashboardTitle">Your Games</h3>
      <table className="gameList">
        <tbody>
          {userData.user.games.map((game) => {
            // TODO - Change collection to get object by ID not index
            return(
              <GameListItem
                name={game.name}
                collection={collections[game.collectionId]}
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

// class TeacherDashboard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//
//     }
//   }
//
//   render() {
//     return (
//       <div className="dashboard">
//         <Header />
//           <Switch>
//             <Route pattern="/" exact component={TeacherHome}/>
//             <Route pattern="/game/new" component={NewGame}/>
//           </Switch>
//       </div>
//     )
//   }
// }

export default TeacherHome;

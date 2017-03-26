import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header, Table } from 'semantic-ui-react';
import GameListItem from './GameListItem';

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
        <Header as="h1" className="floated left">Teacher Dashboard</Header>

        <Link to="new" className="ui button positive right floated">
          New Game
        </Link>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Your Games</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              {this.state.games.map((game) => {
                return (
                  <GameListItem
                    name={game.name}
                    collection={game.coll_name}
                    id={game.id}
                    key={game.id}
                  />
                )
              })}
            </Table.Body>
        </Table>
      </div>
    )
  }
}

export default AdminDashboard;

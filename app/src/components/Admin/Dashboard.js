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
    axios.get('http://localhost:8888/api/missions')
      .then((res) => {
        console.log("this is the result of the API call", res.data);
        console.log("and this is the state at the beginning", this.state)
        //res.data is an object of objects
        //loop through the object and set the state
        for(let key in res.data) {
          console.log("inside the for loop, key, and res.data[key]", key, res.data[key]);
          let temp_mission = this.state.games.slice();
          let temp_casefile = this.state.collections.slice();
          temp_mission.push(key);
          temp_casefile.push(res.data[key]);
          this.setState({
            games: temp_mission,
            collections: temp_casefile,
          }) //it errors here - fixed with Object.keys in render()
          //new error involving child keys ***** TODO ******
        }
        // old way to do it (w/o bookshelf)
        // this.setState({
        //   games: res.data[0],
        //   collections: res.data[1]
        // })
      })
      .then(() => {
        // TODO so this is now broken - because the unique key error happens... no, I don't understand it...
        // console.log("in the next then()");
        // console.log("type of this.state.games & collections", typeof this.state.games, typeof this.state.collections);
        // console.log("this.state.games & collections", this.state.games, this.state.collections);
        // // they are both strings and they both contain only the last item from the database...
        // for (let key in this.state.collections) {
        //   console.log("key", key);
        //   // make a copy of games
        //   const games = this.state.games.slice();
        //   //const games = {...this.state.games}
        //   console.log("games", games, typeof games);
        //   // add collection name to game object
        //   games[key].push(this.state.collections[key])
        //   //games[key].coll_name = this.state.collections[key].name
        //   console.log(games);
        //
        //   // set state of games
        //   this.setState( games );
        // } // Cannot create property 'coll_name' on string 'P'
      })
      .then(() => {
        console.log("???", this.state); //here this.state only contains the last element???
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Header as="h1" className="floated left">
          Operation Legit-o-Meter
        </Header>

        <Link to="new" className="ui button positive right floated">
          Create a New Mission
        </Link>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Your Existing Missions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.keys(this.state.games).map((key, id) => {
              return (
                <GameListItem
                  name={this.state.games[key]}
                  collection={this.state.collections[key]}
                  id={id}
                  key={id}
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

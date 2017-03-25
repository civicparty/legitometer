import React from 'react';
import Header from './Header';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>{this.props.test}</p>
        <h3>Here you can view each game</h3>
        <p>rendered when the url is /game/:id ... </p>
        <p>so this component needs to take the id and </p>
        <p>and get the game's name and collection to display</p>
      </div>
    )
  }
}

Game.defaultProps = {
  test: "well, so we'll try this"
  //so defaultProps could be... linked to routes somehow?
}

export default Game;

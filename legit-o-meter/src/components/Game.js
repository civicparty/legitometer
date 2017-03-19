import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h3>Here you can view each game</h3>
        <p>rendered when the url is /game/:id ... </p>
        <p>so this component needs to take the id and </p>
        <p>and get the game's name and collection to display</p>
      </div>
    )
  }
}

export default Game;

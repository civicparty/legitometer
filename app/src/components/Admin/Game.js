import React from 'react';

class Game extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.test}</p>
        <h3>Here you can view each mission</h3>
        <p>rendered when the url is /mission/:id ... </p>
        <p>so this component needs to take the id and </p>
        <p>and get the mission's name and case file to display</p>
      </div>
    )
  }
}

Game.defaultProps = {
  test: "well, so we'll try this"
  //so defaultProps could be... from database?
}

export default Game;

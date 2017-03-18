import React from 'react';
import '../App.css';

class Game extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td><button><a href="" className="reviewButton">Review</a></button></td>
              <td><h5 className="gameName">game name</h5></td>
              <td><button className="deleteButton">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Game;

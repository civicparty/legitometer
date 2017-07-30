import React from 'react';

class Mission extends React.Component {

  render() {
    return (
      <div>
        <h3>This will display the mission name</h3>
        <p>And the casefile id and the associated articles for review</p>
        <p>and possibly editing/deleting</p>
      </div>
    )
  }
}

// Mission.defaultProps = {
//   test: "well, so we'll try this"
//   //so defaultProps could be... from database?
// }
//        <p>{this.props.test}</p>


export default Mission;

// TODO ids are not lining up, switching to name with " " replaced with "_" seems a good idea
// <p>the url should be /mission/:id but the ids are not lining up</p>
// <p>so this component needs to take the id and </p>
// <p>and get the missions name and case file to display</p>

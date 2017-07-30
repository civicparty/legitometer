import React from 'react';

class Mission extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.test}</p>
        <h3>Here you can view each mission but the ids are not correct</h3>
        <p>so this probably won't work:</p>
        <p>rendered when the url is /mission/:id ... </p>
        <p>so this component needs to take the id and </p>
        <p>and get the missions name and case file to display</p>
      </div>
    )
  }
}

// Mission.defaultProps = {
//   test: "well, so we'll try this"
//   //so defaultProps could be... from database?
// }

export default Mission;

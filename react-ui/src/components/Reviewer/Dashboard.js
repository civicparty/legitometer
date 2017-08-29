import React from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { Header, Table, Button } from 'semantic-ui-react';
import ReviewList from './ReviewList';


class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      missions: [],
      casefiles: [],
    }
  }

  componentDidMount() {
    // GET missions assigned to student user
    axios.get('/api/missions')
      .then((res) => {
        // loop through the result object and set the state
        for(let key in res.data) {
          // assign state to temp arrays
          let temp_mission = this.state.missions.slice();
          let temp_casefile = this.state.casefiles.slice();
          // push data to arrays
          temp_mission.push(key);
          temp_casefile.push(res.data[key]);
          // set the state
          this.setState({
            missions: temp_mission,
            casefiles: temp_casefile,
          })
        }
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
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3' textAlign='center'>Your Missions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Object.keys(this.state.missions).map((key, id) => {
              return (
                <ReviewList
                  name={this.state.missions[key]}
                  collection={this.state.casefiles[key]}
                  id={id}
                  key={id}
                />
              )
            })}

          </Table.Body>
        </Table>


        <Link to="/start">
          <Button basic color="red">
            Legit-o-Meter: Vaccines
          </Button>
        </Link>
      </div>
    )
  }
}

export default StudentDashboard;


// <Table.Row>
//   <Table.Cell>Ms. TestTeacher</Table.Cell>
//   <Table.Cell>Game 1</Table.Cell>
//   <Table.Cell><Link to="/mstestteacher/1" className="ui button blue">Start Game</Link></Table.Cell>
// </Table.Row>
// <Table.Row>
//   <Table.Cell>Mr. TeacherTest</Table.Cell>
//   <Table.Cell>Game 2</Table.Cell>
//   <Table.Cell><Link to="/" className="ui button blue">Start Game</Link></Table.Cell>
// </Table.Row>

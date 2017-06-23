import React from 'react';
import { Header, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class StudentDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      missions: []
    }
  }

  componentDidMount() {
    // GET missions assigned to student user

  }
  render() {
    return (
      <div>
        <Header as="h1" className="center">
          Student Dashboard
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3' textAlign='center'>Your Missions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Link to="/start">              
              <Button basic color="red">
                Legit-o-Meter
              </Button>
            </Link>
          </Table.Body>
        </Table>

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

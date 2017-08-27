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
    axios.get('http://localhost:8888/api/missions')
      .then((res) => {
        const missions = res.data.map((mission) => {
          return {
            id: mission.id,
            name: mission.name,
            casefileId: mission.casefile_id,
            casefileName: mission.casefile_name,
          };
        });

        this.setState({ missions: missions })
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

      </Table>

        <Link to="/start">
          <Button basic color="red">
            Legit-o-Meter: Vaccines
          </Button>
        </Link>

//           <Table.Body>
//             {
//               this.state.missions.map((mission, i) => {
//                 return (
//                   <ReviewList
//                     name={mission.name}
//                     casefile={mission.casefileName}
//                     id={mission.id}
//                     key={i}
//                   />
//                 )
//               })
//             }
//           </Table.Body>
//         </Table>

      </div>
    )
  }
}

export default StudentDashboard;


// TODO add this back later
// <Table celled>
//   <Table.Header>
//     <Table.Row>
//       <Table.HeaderCell colSpan='3' textAlign='center'>Your Missions</Table.HeaderCell>
//     </Table.Row>
//   </Table.Header>
//   <Table.Body>
//     {Object.keys(this.state.missions).map((key, id) => {
//       return (
//         <ReviewList
//           name={this.state.missions[key]}
//           collection={this.state.casefiles[key]}
//           id={id}
//           key={id}
//         />
//       )
//     })}
//
//   </Table.Body>
// </Table>


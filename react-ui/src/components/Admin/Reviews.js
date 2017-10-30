import React from 'react';
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react';
import ReviewListItem from './ReviewListItem';
// import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';

class Reviews extends React.Component {
  constructor() {
    super();
    this.state = {
      group: [],
      review: [],
    };
  }

  componentDidMount() {
    const { mission_id } = this.props.match.params;
    // show all the groups OR reviews???? for a given mission_id
    // console.log("component is mounting, mission id is", mission_id, this, this.state, this.props);
    axios.get(`/api/reviews/${mission_id}`)
    .then((res) => {
      this.setState({ review: res.data })
     })
     .then(() => {
       console.log("reviews", this.state.review);
     })
    .catch((err) => {
      console.log("componentWillMount error Reviews.js", err);
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
              <Table.HeaderCell>Mission {this.props.mission_id} Groups</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { this.state.review.map((review, i) => {
              return (
              <ReviewListItem
                review={review}
                group={review[0]}
                id={review[1]}
                key={review[1]}
              />
              )
            })}
          </Table.Body>
        </Table>
      </div>
    )
  }

}



export default Reviews;

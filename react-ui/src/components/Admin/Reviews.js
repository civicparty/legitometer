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
      group: [], //array of objects [{review_id: member1, member2, member3}]
      review: [],
    };
  }
  // componentDidMount() {
  //   // get mission details
  //   axios.get(`/api/view-mission/${this.props.match.params.id}`)
  //     .then((res) => this.setState({ mission: res.data }))
  //     .catch((err) => {
  //       console.log("get articles error in Mission.js", err);
  //     })
  // }
  componentDidMount() {
    const { mission_id } = this.props.match.params;
    // show all the groups OR reviews???? for a given mission_id
    console.log("component is mounting, mission id is", mission_id, this, this.state, this.props);
    axios.get(`/api/reviews/${mission_id}`)
    .then((res) => {
      this.setState({ review: res.data })
      // let group = this.state.group.slice();
      // console.log("component will mount", res.data);
      // for (var i = 0; i < res.data.length; i++) {
      //   group.push({"rev": res.data[i].review_id, "grp": res.data[i].group_id});
      // }
      // console.log(this);
      // let thing = this.state.group.slice();
      // thing.push(group);
      // this.setState({ group: thing });
     })
     .then(() => {
       console.log("reviews", this.state.review);

     })
    .catch((err) => {
      console.log("componentWillMount error Reviews.js", err);
    })
  }

  // componentDidMount() {
  //   console.log("component mounted", this);
  //   // get group names
  //   // let group_ids = this.state.group['grp'];
  //   // axios.get(`/api/groups/${group}`) //no no this doesn't work at all
  //   // .then((res) => {
  //   //   this.setState({
  //   //     group: res.data
  //   //   })
  //   // })
  //   // .catch((err) => {
  //   //   console.log("it's all wrong", err);
  //   // })
  // }

  // show a list of all the groups in the mission like:
  // <link>buffy, willow, xander</link>
  render() {
    // const { mission_id } = this.props.match.params;
    return (
      <div>
        <Header as="h1" className="floated left">
          Operation Legit-o-Meter
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Mission {this.props.mission_id} Groups</Table.HeaderCell>
  \          </Table.Row>
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

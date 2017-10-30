import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import ResponseListItem from './ResponseListItem';

class Responses extends React.Component {
  constructor() {
    super();
    this.state = {
      responses: []
    };
  }

  componentDidMount() {
      // get responses with review_id
      axios.get(`/api/response/${this.props.match.params.review_id}`)
      .then((res) => {
        console.log("responses response", res.data);
        // why does this work for Dashboard.js / missions and not this?
        this.setState({ responses: res.data });
      })
      .catch((err) => {
        console.log("Responses.js error", err);
      })
  }

  render() {
    console.log("yay repsonses", this.props, this.state.responses);
    let reviewid = this.props.match.params.review_id;
    return (
      <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Question</Table.HeaderCell>
                <Table.HeaderCell>Answer</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.state.responses.map((response, i) => {
                console.log("aaaaaa", response);
                return (
                <ResponseListItem
                  response={response.response}
                  question={response.question}
                  questionType={response.questionType}
                  id={response.id}
                  key={response.id}
                />
                )
              })}
            </Table.Body>
          </Table>
      </div>
    )
  }

}

export default Responses;

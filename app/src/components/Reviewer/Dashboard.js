import React from 'react';
import Header from '../Shared/Header'
import axios from 'axios'

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8888/articles/api')
      .then((res) => {
        this.setState({ articles: res.data })
      })
      .catch((err) => {
        console.error(err);
      })
  }
  render() {
    return (
      <div>
        <Header as="h1">Student Dashboard</Header>
        <h1></h1>
        <h6>Directions or something</h6>
        <table>
          <tbody>

          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentDashboard;

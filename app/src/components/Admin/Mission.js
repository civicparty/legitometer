import React from 'react';
import axios from 'axios';

class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: '',
      casefile: '',
      articles: [],
    }
  }

  // right, there is nothing in this.props.name right now...
  componentDidMount() {
    console.log("component mounting", this.props.match.params.name);
    console.log("???", this.props.match.params.casefile_name);
    let str = this.props.match.params.name;
    let mission_name = str.replace("\s", '_');
    let casefile_name = this.props.match.params.casefile_name;
    console.log(mission_name);
    axios.get('http://localhost:8888/api/view-mission/' + mission_name, {
      params: {name: mission_name}
    })
    .then((res) => {
      console.log("mission", str, "gotten", res); //empty
      // get articles to set here
      this.setState({
        mission: str,
        casefile: casefile_name,
        articles: res.data,
      })
    })
    .catch((err) => {
      console.log("mission failed", err);
    })

    console.log("the end?");
    // axios.get('http://localhost:8888/api/casefile/' + casefileid, {
    //   params: {id: casefileid}
    // })
    // .then((res) => {
    //   console.log("casefile gotten", res);
    // })
    // .catch((err) => {
    //   console.log("casefile failed", err);
    // })
  }

  render() {
    return (
      <div>
        <h3>Mission: {this.state.mission}</h3>
        <p>Casefile: {this.state.casefile}</p>
        <p>Articles:</p>
        <p>{this.state.articles}</p>
        <h6>(list of articles)</h6>
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

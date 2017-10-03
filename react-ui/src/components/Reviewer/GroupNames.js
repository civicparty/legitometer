import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../Shared/Button';
import legitCatImage from '../../images/legit-cat.png';

class GroupNames extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names: ['', '']
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(i, e) {
    const { names } = this.state;
    names[i] = e.target.value;

    // If the last field has text, add another field to the end.
    if (names[names.length - 1] !== '') names.push('');
    this.setState({ names });
  }

  handleSubmit(e) {
    let thiz = this;
    e.preventDefault();
    debugger

    axios.post('/api/add-group', {
      names: this.state.names.join('// '), // this is hacky. We should submit names separately and associate to a group.
      group_name: '', // in the future, we could let students name their team.
      mission_id: this.props.match.params.id,
    })
    .then((res) => {
      console.log(res)
      thiz.setState({ submitGroup: true })
    })
    .catch((err) => console.log("error in adding group: ", err));
  }

  render() {
    return (
      <div className="GroupNames">
        <form onSubmit={this.handleSubmit}>
          <h2>Who is on your team?</h2>
          <p className="tip">Add the name of everyone on your team. Select Next once everyone has been added.</p>
          <div className="GroupNames__field-set">
            {
              this.state.names.map((name, i) => {
                return (
                  <input type="text" name={`${name}_${i}`} key={i}
                    className="GroupNames__input question--short"
                    placeholder="Name"
                    defaultValue={this.state.names[i]}
                    onChange={this.handleNameChange.bind(this, i)}
                  />
                )
              })
            }
          </div>
          <button type="submit" className="button">
            Next
          </button>
        </form>
      </div>

    );
  }
}

export default GroupNames;

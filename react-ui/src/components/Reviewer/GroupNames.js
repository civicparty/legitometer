import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    e.preventDefault();
    // TODO: Submit names to server
    debugger
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
                  <input type="text" name={`${name}_${i}`}
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

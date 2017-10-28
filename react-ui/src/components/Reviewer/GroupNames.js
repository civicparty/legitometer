import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

  handleUpdateReviewId(reviewId) {
    this.props.updateReviewId(reviewId);
  }
  handleUpdateQuestionId(questionId) {
    console.log("updating questionId GroupNames.js", questionId);
    this.props.updateQuestionId(questionId);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(typeof this.state.names, this.state.names, this.props.match.params.id);
    let thiz = this;
    console.log(this.state.names);
    // save group to groups table, names to reviewers table, and review to review table
    axios.post('/api/add-group', {
      names: this.state.names,
      mission_id: this.props.match.params.id,
      // group_name: '', // in the future, we could let students name their team.
    })
    .then((res) => {
      console.log("group added", res);
      this.handleUpdateReviewId(res.data.id);
      this.handleUpdateQuestionId(0);
      thiz.setState({ submitGroup: true });
    })
    .catch((err) => {
      console.log("error in adding group: ", err)
      // TODO Remove: even when submit doesn't work, let's fake it for now.
      thiz.setState({ submitGroup: true })
    });
  }

  render() {
    const { id, casefile_id } = this.props.match.params;
    return (
      <div className="GroupNames">
        {this.state.submitGroup && (
          <Redirect to={`/mission/${id}/casefile/${casefile_id}/article/preview`}/>
        )}
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

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table, Input, Select } from 'semantic-ui-react';
import UpdateArticle from './UpdateArticle';
import { Redirect, Link } from 'react-router-dom';

class Collections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      collection: {},
      isLoading: true,
      isDeleted: null,
      editName: false,
    }
    this.getArticles = this.getArticles.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.toggleEditFields = this.toggleEditFields.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.handleRemoveArticle = this.handleRemoveArticle.bind(this);
    this.toggleCasefileEditField = this.toggleCasefileEditField.bind(this);
    this.saveNewName = this.saveNewName.bind(this);
    this.updateCasefileName = this.updateCasefileName.bind(this);
    this.deleteCasefile = this.deleteCasefile.bind(this);
  }

  getArticles() {
    const { id } = this.props.match.params;

    axios.get(`/api/casefile/${id}`)
      .then((res) => {
        console.log("casefile", res.data)
        this.setState({ collection: res.data, isLoading: false })
      })
      .catch((err) => console.log(err))


    axios.get(`/api/casefile/${id}/articles`)
      .then((res) => this.setState({ articles: res.data, isLoading: false }))
      .catch((err) => console.log(err))
  }

  toggleEditFields(e, index) {
    this.state.articles[index].isEditing = true;
    this.forceUpdate();
  }

  updateArticle(index, articleState) {
    axios.put(`/api/update-article/${articleState.id}`, {
      url: articleState.url,
      type: articleState.type,
      headline: articleState.headline,
    })
    .then((res) => {
      this.state.articles[index].isEditing = false;
      this.state.articles[index].url = res.data.article.url;
      this.state.articles[index].type = res.data.article.type;
      this.state.articles[index].headline = res.data.article.headline;
      this.forceUpdate();
    })
    .catch((err) => console.log(err))
  }

  deleteArticle(e, article_id) {
      e.preventDefault;
      axios.delete('/api/delete-article/' + article_id, {
        params: { id: article_id },
      })
        .then((res) => {
          console.log("article deleted successfully", res);
          // remove from view
          this.handleRemoveArticle(article_id);
        })
        .catch((err) => {
          console.log("error deleting article", err);
        })
  }

  handleRemoveArticle(id) {
    const updatedArticles = this.state.articles.filter((article) => {
      return article.id !== id
    })
    this.setState({ articles: updatedArticles });
    this.forceUpdate();
  }

  toggleCasefileEditField(e) {
    this.setState({editName: !this.state.editName});
    this.forceUpdate();
  }

  saveNewName(e, id) {
    e.preventDefault;
    const newName = this.refs.input ? this.refs.input.value : this.state.collection.name;
    let collection = this.state.collection;
    collection.name = newName;
    this.setState({
      editName: !this.state.editName,
      collection: collection,
    })
    this.updateCasefileName(id, newName);

  }
  updateCasefileName(id, newName) {
    axios.patch('/api/update-casefile/', {
      id: id,
      name: newName
    })
    .then((res) => {
      console.log("update casefile success", res);
    })
    .catch((err) => {
      console.log("update casefile error", err);
    })
  }

  deleteCasefile(id) {
    let thiz = this;
    axios.delete(`/api/delete-casefile/${id}`, {
      params: {id: id}
    })
      .then((res) => {
        console.log("casefile deleted!");
        thiz.setState({ isDeleted: true });
      })
      .catch((err) => {
        console.log("casefile delete error", err);
      })
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isDeleted } = this.state;

    if (this.state.isLoading) return false;

    const { name } = this.state.collection;

    let editCasefileName = (
        <div className="flex">
          <input ref="input"
            type="text" placeholder="Enter new name of casefile"
            defaultValue={name}
            className="bump-right"
          />
        <button className="ui button primary" type="submit" onClick={(e) => this.saveNewName(e, this.state.collection.id)}>
            Save
          </button>
        </div>
    );
    let displayCasefileName = (
        <div className="flex">
            Edit {name} Collection
        </div>
    );

    return (
      <div>
        <h2>{ this.state.editName ? editCasefileName : displayCasefileName } </h2>
        <Button primary onClick={(e) => this.toggleCasefileEditField(e)}>Edit Casefile Name</Button>
        <Button basic color="red" onClick={() => this.deleteCasefile(this.state.collection.id)}>Delete Casefile</Button>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Headline</Table.HeaderCell>
              <Table.HeaderCell>URL</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
              {
                this.state.articles.map((article) => {
                  let { headline, url, type, index, isEditing } = article;

                  if (isEditing) {
                    return (
                      <UpdateArticle article={article} key={index}
                        handleUpdateArticle={this.updateArticle}
                      />
                    )
                  } else {
                    return (
                      <Table.Row key={index}>
                        <Table.Cell>{headline}</Table.Cell>
                        <Table.Cell style={{ wordWrap: "break-word", maxWidth: "400px" }}>
                          <a href={url} target="_blank">{url}</a>
                        </Table.Cell>
                        <Table.Cell>{type}</Table.Cell>
                        <Table.Cell>
                          <Button primary onClick={(e) => this.toggleEditFields(e, index)}>
                            Edit
                          </Button>
                          <Button type="button" basic color="red" onClick={(e) => this.deleteArticle(e, article.id)}>
                            Delete
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    )
                  }
                }
              )}
          </Table.Body>
        </Table>
        {isDeleted && (
          <Redirect to={'/admin'}/>
          )}
          <Link to="/admin">
            <Button secondary>Done Editing</Button>
          </Link>
      </div>
    );
  }
}

export default Collections;

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Table, Input, Select } from 'semantic-ui-react';
import UpdateArticle from './UpdateArticle';

class Collections extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      collection: {},
      isLoading: true,
    }
    this.getArticles = this.getArticles.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.toggleEditFields = this.toggleEditFields.bind(this);
  }

  getArticles() {
    const { id } = this.props.match.params;

    axios.get(`/api/casefile/${id}`)
      .then((res) => {
        console.log(res.data)
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

  componentDidMount() {
    this.getArticles();
  }

  render() {
    if (this.state.isLoading) return false;

    console.log(this.state.articles);
    const { name } = this.state.collection;

    return (
      <div>
        <h2>Edit {name} Collection</h2>
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
                        </Table.Cell>
                      </Table.Row>
                    )
                  }
                }
              )}
          </Table.Body>
        </Table>
      </div>
    );
  }

}

export default Collections;

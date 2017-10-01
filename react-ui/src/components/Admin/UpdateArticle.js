import React, { Component } from 'react';
import { Button, Table, Input, Select } from 'semantic-ui-react';
import articleTypes from '../../data/articleTypes';


class UpdateArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.article.id,
      url: props.article.url,
      type: props.article.type,
      headline: props.article.headline,
    }
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleHeadlineChange = this.handleHeadlineChange.bind(this);
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }
  handleTypeChange(e) {
    this.setState({ type: e.target.innerText });
  }
  handleHeadlineChange(e) {
    this.setState({ headline: e.target.value });
  }

  render() {
    const { index } = this.props.article;
    const { headline, url, type } = this.state;
    return (
      <Table.Row>
        <Table.Cell>
          <Input
            defaultValue={headline}
            onChange={this.handleHeadlineChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Input defaultValue={url} onChange={this.handleUrlChange} />
        </Table.Cell>
        <Table.Cell>
          <Select placeholder='Select Article Type'
            options={articleTypes}
            defaultValue={type.toLowerCase()}
            onChange={this.handleTypeChange}
          />
        </Table.Cell>
        <Table.Cell>
          <Button className="button ui green"
            onClick={this.props.handleUpdateArticle.bind(this, index, this.state)}
          >
            Save
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }

}

export default UpdateArticle;

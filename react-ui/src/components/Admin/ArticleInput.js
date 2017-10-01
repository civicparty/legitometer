import React from 'react';
import { Form } from 'semantic-ui-react';
import articleTypes from '../../data/articleTypes';

class ArticleInput extends React.Component {
  constructor(props) {
    super(props);
    this.removeArticle = this.removeArticle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, result) {

    const isDropdown = e.target.getAttribute("role") === "option"

    const index = result.id.split("_")[2];
    const fieldName = result.id.split("_")[1];
    const value = isDropdown ? e.target.innerText : result.value ;

    this.props.handleArticleInputChange(index, fieldName, value)
  }

  removeArticle(e) {
    this.props.handleRemoveArticle(this.props.index);
  }

  render() {
    return (
      <div className="flex article-new-inputs">
        <Form.Input
          type="text"
          id={`article_name_${this.props.index}`}
          label="Article Name"
          placeholder="Article Name"
          onChange={this.handleChange}
        />
        <Form.Input
          type="text"
          id={`article_url_${this.props.index}`}
          label="Article URL"
          placeholder="Article URL"
          onChange={this.handleChange}
        />
        <Form.Select
          options={articleTypes}
          label="Article Type"
          id={`article_type_${this.props.index}`}
          placeholder="Article Type"
          onChange={this.handleChange}
        />
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <button className="ui button red small" type="button" onClick={(e) => this.removeArticle(e)}>
            Remove
          </button>
        </div>
      </div>
    )
  }
}


export default ArticleInput;

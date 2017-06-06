import React from 'react';
import { Form } from 'semantic-ui-react';

const articleTypes = [
  { key: 'analysis', text: 'Analysis', value: 'analysis'},
  { key: 'satire', text: 'Satire', value: 'satire'},
]

class ArticleInput extends React.Component {

  handleChange(e) {

    const isDropdown = e.target.getAttribute("role") === "option"
    const inputElement = isDropdown ? e.target.closest(".dropdown") : e.target.parentElement

    const index = inputElement.id.split("_")[2];
    const fieldName = inputElement.id.split("_")[1];
    const value = isDropdown ? e.target.innerText : e.target.value ;

    this.props.handleArticleInputChange(index, fieldName, value)
  }

  render() {
    return (
      <div className="flex article-new-inputs">
        <Form.Input
          type="text"
          id={`article_name_${this.props.index}`}
          label="Article Name"
          placeholder="Article Name"
          onChange={this.handleChange.bind(this)}
        />
        <Form.Input
          type="text"
          id={`article_url_${this.props.index}`}
          label="Article URL"
          placeholder="Article URL"
          onChange={this.handleChange.bind(this)}
        />
        <Form.Select
          options={articleTypes}
          label="Article Type"
          id={`article_type_${this.props.index}`}
          placeholder="Article Type"
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}


export default ArticleInput;

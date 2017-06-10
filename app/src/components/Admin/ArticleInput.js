import React from 'react';
import { Form } from 'semantic-ui-react';

const articleTypes = [
  { key: 'analysis', text: 'Analysis', value: 'analysis'},
  { key: 'satire', text: 'Satire', value: 'satire'},
]

class ArticleInput extends React.Component {

  handleChange(e, result) {
    // console.log("soooo", result.id);
    // *** this works sometimes but not other times WHYYYYYY? and when it does work it only works for the first input ***

    // this sets the "role" Attribute of the target to option?
        // is it supposed to reference options in the form?
    const isDropdown = e.target.getAttribute("role") === "option"
    // i forgot what ? : does exactly and i can't google it...
    // console.log("line 2, isDropdown", isDropdown, "e.target.closest",  e.target.closest(".dropdown"),"e.target.parent", e.target.parentElement);

    const inputElement = isDropdown ? e.target.closest(".dropdown") : e.target.parentElement
    // isDropdown is evaluating to false when it shouldn't be and thus it is not selecting the correct thing
    // console.log("inputElement.id", inputElement.id);
    const index = result.id.split("_")[2]; // these are undefined for ArticleTypes
    const fieldName = result.id.split("_")[1];

    // const index = inputElement.id.split("_")[2]; // these are undefined for ArticleTypes
    // const fieldName = inputElement.id.split("_")[1];
    const value = isDropdown ? e.target.innerText : result.value ;
    // const value = isDropdown ? e.target.innerText : e.target.value ;
    // console.log("ok, i'm saving the things", index, fieldName, value);
    // so this should send the index where to put the stuff in this.state.articles,
    // the fieldName and the value... to handleArticleInputChange() in CreateCollection.js
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

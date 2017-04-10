import React from 'react';
import { Form } from 'semantic-ui-react';

const articleTypes = [
  { key: 'analysis', text: 'Analysis', value: 'analysis'},
  { key: 'satire', text: 'Satire', value: 'satire'},
]

class ArticleInput extends React.Component {

  handleChange() {
    //pass props
    console.log("formInput handleChange()");
  }
  render() {
    return (
      <div className="flex article-new-inputs">
        <Form.Input type="text" label="Article Name" placeholder="Article Name" />
        <Form.Input type="text" label="Article URL" placeholder="Article URL" />
        <Form.Select label='Article Type' options={articleTypes} placeholder='Article Type' />
      </div>
    )
  }
}


export default ArticleInput;

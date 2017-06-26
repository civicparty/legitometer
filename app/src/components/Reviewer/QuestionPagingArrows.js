import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuestionPagingArrows extends Component {

  render() {
    const MAX_QUESTIONS = 20
    const { currentId } = this.props;
    const hasPrevious = currentId <= 1
    const hasNext = currentId >= MAX_QUESTIONS
    const previousId = hasPrevious ? currentId : currentId - 1
    const nextId = hasNext ? currentId : currentId + 1
    const disabledColor = '#93D0F1' // light blue
    const enabledColor = '#C5E3F4' // blue

    const wrapperCss = {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '15px 20px',
    }
    const buttonCss = {
      height: '30px',
      width: '30px',
      margin: '0 5px',
      padding: '4px',
      textAlign: 'center',
      borderRadius: '3px',
    }
    const previousButtonCss = Object.assign({
      backgroundColor: hasPrevious ? enabledColor : disabledColor,
      color: 'white',
    }, buttonCss)
    const nextButtonCss = Object.assign({
      backgroundColor: hasNext ? enabledColor : disabledColor,
      color: 'white',
    }, buttonCss)

    const previousLink = `/article/1/question/${previousId}`
    const nextLink = `/article/1/question/${nextId}`

    return (
      <div style={wrapperCss}>
       <Link to={previousLink} style={previousButtonCss}>
         &lt;
       </Link>
       <Link to={nextLink} style={nextButtonCss}>
         &gt;
       </Link>
      </div>
    );
  }

}

export default QuestionPagingArrows;

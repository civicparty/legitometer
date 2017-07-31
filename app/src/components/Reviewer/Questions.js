import React, { Component } from 'react';
import Route from 'react-router-dom';

class Questions extends Component {

  render() {
    const { match } = this.props
    const question = find(Number(match.params.id) - 1)

    return (
      <div className="text-center">
        <h1>{question.text}</h1>
        <input type="text" className="question--short" />
        <p className="tip" style={{ paddingTop: '10px' }}>{question.helpText}</p>
      </div>
    );
  }

}


const find = (id) => QuestionSet.find(p => p.id == id)



const QuestionSet = [
  {
    id: 0,
    text: 'What is the headline?',
    type: 'short',
  }, {
    id: 1,
    text: 'Briefly summarize the article in 1 sentence',
    type: 'long',
    helpText: 'Tip: Use your skim reading skills here! Remember, you want to quickly get a sense of what the article is about. Try reading the first and last paragraphs, take turns reading aloud in your group, or look for a thesis statement.',
  }, {
    text: 'Author and Publisher',
    helpText: 'For these questions you\'ll find out information about the author and publisher. Tip: divide up tasks among the team! One person can write down notes while other conduct research.',
    type: 'sectionHeader',
  }, {
    id: 2,
    text: 'What is the author\'s name?',
    type: 'short',
  }, {
    id: 3,
    text: 'What information can you find about the author?',
    helpText: 'Tip: Look for information about what the author has written before and what their qualifications are. Try a Google search here!',
    type: 'long',
  }, {
    id: 4,
    text: 'Is the author credible?',
    type: 'yesNo',
  }, {
    id: 5,
    text: 'Who published this article?',
    type: 'short',
    helpText: 'Tip: look for the title of the magazine, newspaper, or website where you found your article',
  }, {
    id: 6,
    text: 'What information can you find about the publisher?',
    helpText: 'Tip: Look for information about the publication and its reputation. Has the publication won awards? What do people say about it?',
    type: 'long',
  }, {
    id: 7,
    text: 'Is the publisher credible?',
    type: 'yesNo',
  }, {
    text: 'Context',
    helpText: 'Here you will answer some questions about the website and about features of the article.',
    type: 'sectionHeader',
  }, {
    id: 8,
    text: 'Is the site well designed?',
    type: 'yesNo',
  }, {
    id: 9,
    text: 'Design information -­ what did you notice?',
    type: 'long',
    helpText: 'Tip: were there spelling errors? Layout problems? Does the site look nice and work well?',
  }, {
    id: 10,
    text: 'Did the author use sources in the article?',
    type: 'yesNo',
  }, {
    id: 11,
    text: 'Where did the sources come from?',
    helpText: 'Tip: Check out the links, if there are any, in the article. Or see if the article quotes anyone',
    type: 'long',
  }, {
    id: 12,
    text: 'What year was the article published?',
    type: 'short',
  }, {
    text: 'Bias and Purpose',
    type: 'sectionHeader',
    helpText: 'For these questions you\'ll dig into some "why" questions - why did someone write this article? What is the goal of the article? And does the article have bias, or lean a certain way on an issue? Remember, bias isn\'t inherently good or bad!',
  }, {
    id: 13,
    text: 'Is there bias in your article?',
    type: 'yesNo',
  }, {
    id: 14,
    text: 'What did you notice about bias in this article? Is the author trying to make you believe something?',
    helpText: 'Remember, bias means leaning one way or another on an issue. Is the article for or against something? Is the article trying to convince you to take a side on an issue?',
    type: 'long',
  }, {
    id: 15,
    text: 'What is the purpose of the article? Why was it produced?',
    helpText: 'Tip: Think about the article\'s goal. Is the article trying to persuade you to think a certain way, make you laugh, give you facts?',
    type: 'long',
  }, {
    text: 'Final Scorecard - Rate the article!',
    type: 'sectionHeader',
  }, {
    id: 16,
    text: 'Do you think the headline accurately reflects the content in the article?',
    type: 'yesNo',
  }, {
    id: 17,
    text: 'Did the article help you understand the topic better?',
    type: 'yesNo',
  }, {
    id: 18,
    text: 'Would you cite this article in a research paper?',
    type: 'yesNo',
  }, {
    id: 19,
    text: 'Would you share this article with someone you know or on social media?',
    type: 'yesNo',
  }
]

export default Questions;

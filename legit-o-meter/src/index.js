import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router';

import './index.css';
import App from './App';
import Game from './components/Game';
import NotFound from './components/NotFound';

const Root = () => {
  return (
      <p>hello</p>
  )
}

render(<App/>, document.querySelector('#root'));


//  <Match pattern="/game/:teacherId" component={Game} />
// <BrowserRouter>
//   <div>
//     <Match exactly pattern="/" component={App} />
//     <Miss component={NotFound} />
//   </div>
// </BrowserRouter>

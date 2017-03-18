import React from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import './index.css';
import App from './App';
import Game from './components/Game';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact pattern="/" component={App} />
          <Route pattern="/game/:teacherId" component={Game} />
        </Switch>
      </div>
    </Router>
  )
}

render(<Root/>, document.querySelector('#root'));

import React from 'react';
import { render } from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import './index.css';
import App from './App';
import NewGame from './components/NewGame';

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact pattern="/" component={App} />
          <Route pattern="/game/new" component={NewGame}/>
        </Switch>
      </div>
    </Router>
  )
}

render(<Root/>, document.querySelector('#root'));

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

const users = require('./routes/users');
const games = require('./routes/games');
const collections = require('./routes/collections')

app.use(users);
app.use(games);
app.use(collections);

const port = process.env.PORT || 8888;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
  }
});


module.exports = app;

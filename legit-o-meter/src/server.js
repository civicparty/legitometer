const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false })); //the internet says this should be true
app.use(bodyParser.json());

app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next();
})

//const users = require('./routes/users');
const games = require('./routes/games');
//const collections = require('./routes/collections')
// TODO
// app.use('/games', gamesRouter);
//
// something like that. so in your games router file the route get('/' ...) will actually be at /games/

//app.use(users);
app.use(games);
//app.use(collections);

const port = process.env.PORT || 8888;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
  }
});


module.exports = app;

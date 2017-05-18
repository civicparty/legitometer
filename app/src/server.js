const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const cors = require('cors');
const Promise = require('bluebird'); //is this necessary?
const bookshelf = require('../../db/knex'); // TODO is this right?
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.urlencoded({ extended: false })); //the internet says this should be true
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({
  secret: "squirrel"
}))

app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next();
})

// TODO
app.set('bookshelf', bookshelf);

const bookshelf = app.get('bookshelf');

const missions = require('./routes/missions');
const casefiles = require('./routes/casefiles');
const articles = require('./routes/articles');

// TODO
// app.use('/games', gamesRouter);
// something like that. so in your games router file the route get('/' ...) will actually be at /games/

app.use(missions);
app.use(casefiles);
app.use(articles);

const port = process.env.PORT || 8888;

app.listen(port, () => {
  if (app.get('env') !== 'test') {
    console.log('Listening on port', port);
  }
});


module.exports = app;

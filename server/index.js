const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const path = require('path');
const cors = require('cors');
require('dotenv').config()


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

const bookshelf = app.get('./db/knex')
app.set('bookshelf', bookshelf);

const missions = require('./routes/missions');
const casefiles = require('./routes/casefiles');
const articles = require('./routes/articles');
const reviews = require('./routes/reviews');
const users = require('./routes/users');

// TODO
// app.use('/games', gamesRouter);
// something like that. so in your games router file the route get('/' ...) will actually be at /games/

app.use(missions);
app.use(casefiles);
app.use(articles);
app.use(reviews);
app.use(users);

const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server, Haii!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});


module.exports = app;

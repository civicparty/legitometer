var express = require('express');
var router = express.Router();
console.log(__dirname);
const knex = require('../../db/knex')


function authorizedUser(req, res, next) {
  const userID = req.session.user;
  if (userID) {
    next();
  } else {
    res.render('restricted');
  }
}

router.get('/', function(req, res, next) {
  res.send('the games route, it has been gotten');
});

router.post('/api/addgame', (req, res, next) => {
  console.log("hiiiiiiiiiiiiiiiiiii");
  console.log(req.body);
  knex('games').insert({
    user_id: 1,
    //user_id: knex.select('id').from('users').where('id', req.session.user.id),
    name: req.body.name,
    collection_id: req.body.collection_id,
  }, '*')
  .then((data) => {
    console.log("data from router.post", data);
    res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

function authorizedUser(req, res, next) {
  const userID = req.session.user;
  if (userID) {
    next();
  } else {
    res.render('restricted');
  }
}

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
});

router.post('/addgame', (req, res, next) => {
  console.log(req);
  knex('games').insert({
    user_id: 1, 
    //user_id: knex.select('id').from('users').where('id', req.session.user.id),
    name: req.body.name,
    collection_id: 1,
  }, '*')
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;

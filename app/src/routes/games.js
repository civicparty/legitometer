var express = require('express');
var router = express.Router();
//console.log(__dirname);
const knex = require('../../db/knex')


function authorizedUser(req, res, next) {
  const userID = req.session.user;
  if (userID) {
    next();
  } else {
    res.render('restricted');
  }
}

router.get('/games/api', function(req, res, next) {
  // res.send('the games route, it has been gotten');
  req.session.user = 1;
//select collections.name from collections inner join games ON collections.id = games.collection_id;
  let payload = [];
  knex('games')
    .where('user_id', req.session.user)
    .then((games) => {
        payload.push(games);
      knex('games')
      .innerJoin('collections', 'games.collection_id', 'collections.id')
      .where('user_id', req.session.user).select('collections.name').then((collections) => {
        // here want collections.name where collections.id === games.collection_id
        // and how to send it back
        payload.push(collections);
        res.send(payload);
        //res.send(mygames);
        console.log("collections", collections, "games", mygames);
      })
    })
});

router.post('/api/addgame', (req, res, next) => {
  console.log("woo, post route, one step closing to actually fucking posting like it was yesterday");
  knex('games').insert({
    user_id: 1,
    //user_id: knex.select('id').from('users').where('id', req.session.user.id),
    name: req.body.name,
    collection_id: req.body.collection_id,
  }, '*')
  .then((data) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;

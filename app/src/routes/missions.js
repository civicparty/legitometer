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
// mission
router.get('/api/missions', function(req, res, next) {
  // res.send('the missions route, it has been gotten');
  req.session.user = 1;
//select collections.name from collections inner join missions ON collections.id = missions.collection_id;
  let payload = [];
  knex('missions')
    .where('user_id', req.session.user)
    .then((missions) => {
        payload.push(missions);
      knex('missions')
      .innerJoin('casefiles', 'missions.casefile_id', 'casefiles.id')
      .where('user_id', req.session.user).select('casefiles.name').then((casefiles) => {
        // here want collections.name where collections.id === missions.collection_id
        // and how to send it back
        payload.push(casefiles);
        res.send(payload);
      })
    })
});

router.post('/api/add-mission', (req, res, next) => {
  console.log("woohoo, post route add a mission!!!");
  knex('missions').insert({
    user_id: 1,
    //user_id: knex.select('id').from('users').where('id', req.session.user.id),
    name: req.body.name,
    casefile_id: req.body.casefile_id,
  }, '*')
  .then((data) => {
    res.sendStatus(200);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;

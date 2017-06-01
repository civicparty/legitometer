var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
// collections - TODO not used
const Missions = require('../Collections/missions');

// check if user authorized
function authorizedUser(req, res, next) {
  const userID = req.session.user;
  if (userID) {
    next();
  } else {
    res.render('restricted');
  }
}

// need to display user-specific missions + casefiles when user is logged in
router.get('/api/missions', (req, res, next) => {
  let files = {};
  // where user_id === logged_in user (req.session.user)
  let user = 1;

  //get data from mission and casefile tables
  Mission.forge().where({user_id: user}).fetchAll({withRelated: ['casefile'], debug: true})
  .then((mission) => {
    // convert data to JSON
    mission = mission.toJSON();
    // loop over data to get mission and casefile names
    for (var i = 0; i < mission.length; i++) {
      // save to files object
      files[mission[i].name] = mission[i].casefile.name;
    }
    // send files object
    res.send(files)
  })

});

// TODO when is this needed? - get mission by id
router.get('/api/missions/:id', function(req, res, next) {
  Mission.forge().where({id: req.params.id}).fetchAll()
    .then((mission) => {
      res.json({error: false, data: mission.toJSON()});
    })
})


// router.post('/api/add-mission', (req, res, next) => {
//   console.log("woohoo, post route add a mission!!!");
//   knex.raw('SELECT setval(\'missions_id_seq\', (SELECT MAX(id) FROM missions))')
//   .then(() => {
//     knex('missions').insert({
//       user_id: 1,
//       //user_id: knex.select('id').from('users').where('id', req.session.user.id),
//       name: req.body.name,
//       casefile_id: req.body.casefile_id,
//     }, '*')
//
//     .then((data) => {
//       res.sendStatus(200);
//     })
//     .catch((err) => {
//       next(err);
//     });
//   });
// });

module.exports = router;

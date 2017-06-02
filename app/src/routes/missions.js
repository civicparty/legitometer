var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
const User = require('../Models/User');
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
  Mission.forge().where({user_id: user}).fetchAll({withRelated: ['casefile']})
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

// axios.post('http://localhost:8888/api/add-mission', {
//   name: this.state.name,
//   casefile_id: this.state.collection_id,
//   user_id: this.state.user_id,
// also, id - how to select the right one - and url /teachername/id
// mission.user_id -> user.id -> user.name
// })
// model
//   .query('where', 'other_id', '=', '5')
//   .fetch()
//   .then(function(model) {
//     // ...
//   });

// create a new mission
router.post('/api/add-mission', (req, res, next) => {
  //console.log("woohoo, post route add a mission!!!", req.body);
  let username, new_url, next_id;
  bookshelf.knex.raw('SELECT setval(\'missions_id_seq\', (SELECT MAX(id) FROM missions))')

  // TODO I don't think this is the correct way to do this AT ALL
  Mission.count('id').
  then((count) => {
    next_id = parseInt(count)+1;
  })

  User.forge().where({id: req.body.user_id}).fetch()
    .then((user) => {
      user = user.toJSON();
      username = user.name;
      // strip punctuation, capitals, and spaces
      username = username.replace(/[.\-`'\s]/g,"").toLowerCase();
      new_url = '/' + username + '/' + next_id;
    })
    .catch((err) => {
      console.log("User.fetch() error: ", err);
    })

  Mission.forge({name: req.body.name, casefile_id: req.body.collection_id, user_id: req.body.user_id, url: new_url})
  .save()
  .then((mission) => {
    console.log("toast?", new_url);
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log("Mission.save() error: ", err);
  })

})


module.exports = router;

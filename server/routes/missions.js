var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
const User = require('../Models/User');
// collections - TODO not used??? - when is it good to use?
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
  let missionsArray = [];

  // TODO where user_id === logged_in user (req.session.user)
  let user = 1; // temporary workaround

  Mission.forge().where({user_id: user}).query('orderBy', 'id', 'asc')
    .fetchAll({withRelated: ['casefile'], debug:true})
    .then((missions) => {
      // convert data to JSON
      missions = missions.toJSON();

      // loop over data to get mission and casefile names & ids
      for (var i = 0; i < missions.length; i++) {
        missionsArray[i] = {
          "missionName": missions[i].name || "",
          "missionId": missions[i].id || null,
          "casefileName": missions[i].casefile ? missions[i].casefile.name : "no casefile added",
          "casefileId": missions[i].casefile ? missions[i].casefile.id : null,
        }
      }
      // send missions object
      res.send(missionsArray)
    })
});

 // get mission by name / id
 router.get('/api/view-mission/:name', function(req, res, next) {
   let mission_name = req.params.name.split('_').join(' ');
   let missionJSON;

   Mission.forge().where({ name: mission_name }).fetch()
   .then((mission) => res.send(mission))
   .catch((err) => console.log("mission fetching error", err))
 })

// create a new mission
router.post('/api/add-mission', (req, res, next) => {
  let username, new_url, next_id;

  // set the value of the next id in the mission table, avoiding duplicate key errors
  bookshelf.knex.raw('SELECT setval(\'missions_id_seq\', (SELECT MAX(id) FROM missions)+1)')

  // TODO I don't think this is the correct way to do this AT ALL
  // get last mission id

  // get user name from user id for mission url
  User.forge().where({id: req.body.user_id}).fetch()
    .then((user) => {
      user = user.toJSON() || 'testamdmin';
      username = user.name;
      // strip punctuation, capitals, and spaces
      username = username.replace(/[.\-`'\s]/g,"").toLowerCase();
      // create the url students will use to access the mission
      new_url = '/' + username + '/'; // TODO need to add the correct id to this somehow, here or elsewhere
    })
    .then(() => {
      // change last_id to false for current last_id
      Mission.forge().where({last_id: true})
        .save({last_id: false}, {patch: true})
    })
    .then(() => {
      // save mission name, user_id, url to mission table - casefile_id will be
      // updated in patch when selected
      Mission.forge({
        name: req.body.name,
        user_id: req.body.user_id,
        url: new_url,
        last_id: true
      })
      .save()
      .then((mission) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        next(err);
      })
     })
    .catch((err) => {
      next(err);
    })
}) // end post

// update mission with casefile_id on saving
router.patch('/api/update-mission', (req, res, next) => {
  console.log("patch route reached", req.body);
  Mission.forge().where({name: req.body.name}).fetch()
    .then((mission) => {
      // update mission table with selected casefile_id
      console.log("fetched mission to patch", mission);
      Mission.forge().where({id: mission.attributes.id})
        //TODO get casefile_id a better way
        .save({casefile_id: req.body.casefile_id+1}, {patch: true})
        .then((response) => {
          console.log("mission updated successfully", response);
          res.sendStatus(200);
        })
        .catch((err) => {
          next(err);
        })
    })
    .catch((err) => {
      next(err);
    })

})

router.delete('/api/delete-mission/:id', (req, res, next) => {
  Mission.forge().where({id: req.params.id})
    .fetch({require: true})
    .then((mission) => {
      mission.destroy()
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log("nooo, error", err);
      })
    })
    .catch((err) => {
      console.log("delete error", err);
    });
})

module.exports = router;

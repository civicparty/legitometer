var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../../db/knex')

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
  let files = {};
  // where user_id === logged_in user (req.session.user)
  let user = 1; // TODO temp thing

  Mission.forge().where({user_id: user}).fetchAll({withRelated: ['casefile'], debug:true})
  .then((mission) => {
    // convert data to JSON
    mission = mission.toJSON();
    //console.log("these are all the missions", mission);
    // loop over data to get mission and casefile names
    for (var i = 0; i < mission.length; i++) {
      // save to files object
      if (mission[i].casefile.name) {
        files[mission[i].name] = mission[i].casefile.name;
      } else {
        files[mission[i].name] = "no casefile added";
      }
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


// create a new mission
router.post('/api/add-mission', (req, res, next) => {
  console.log("hi, adding mission", req.body);
  let username, new_url, next_id;

  // set the value of the next id in the mission table, avoiding duplicate key errors
  bookshelf.knex.raw('SELECT setval(\'missions_id_seq\', (SELECT MAX(id) FROM missions)+1)')

  // TODO I don't think this is the correct way to do this AT ALL
  // get last mission id
  Mission.count('id').
  then((count) => {
    next_id = parseInt(count)+1;
  })
  // get user name from user id for mission url
  User.forge().where({id: req.body.user_id}).fetch()
    .then((user) => {
      user = user.toJSON();
      username = user.name;
      // strip punctuation, capitals, and spaces
      username = username.replace(/[.\-`'\s]/g,"").toLowerCase();
      // create the url students will use to access the mission
      new_url = '/' + username + '/' + next_id; // TODO next_id and missions.id are not lining up
    })
    .then(() => {
      // save mission name, casefile_id, user_id, and url to mission table
      // removed casefile_id to save in patch when selected
      //casefile_id: req.body.casefile_id,
      Mission.forge({name: req.body.name, user_id: req.body.user_id, url: new_url})
      .save()
      .then((mission) => {
        console.log("mmissioin saved", mission.attributes.id); // TODO can I send this back ...? or hold onto it somehow - YES, IT WOULD BE THE LAST ID IN THE TABLE
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

router.patch('/api/update-mission', (req, res, next) => {
  console.log("patching!", req.body);
  // NOTE should work with 'Save New Mission' button and TODO 'Save Case File' button

  Mission.forge().where({name: req.body.name}).fetch()
    .then((mission) => {
      // update mission with selected casefile_id
      console.log("fetched mission", mission.attributes);
      Mission.forge().where({id: mission.attributes.id})
        .save({casefile_id: req.body.casefile_id}, {patch: true})
        .then((mission) => {
          console.log("mission updated successfully", mission);
        })
        .catch((err) => {
          next(err);
        })
    })
    .catch((err) => {
      next(err);
    })

  // TODO casefile_id for 'climate change' comes back as '0' - is that right????
  // TODO the mission & casefile ids are not what I think they should be / look at this
})

router.delete('/api/delete-mission/:id', (req, res, next) => {
  console.log("you are in the mission delete route");
  Mission.forge().where({id: req.params.id})
    .fetch({require: true})
    .then((mission) => {
      mission.destroy()
      .then(() => {
        console.log("mission", req.params.id, "successfully deleted");
      })
      .catch((err) => {
        console.log("nooo, error", err);
      })
    })
    .catch((err) => {
      console.log("delete error", err);
    });
});

module.exports = router;

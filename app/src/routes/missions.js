var express = require('express');
var router = express.Router();
//console.log(__dirname);
const bookshelf = require('../../db/knex')

// models
const Mission = require('../Models/Mission');
const Casefile = require('../Models/Casefile');
const User = require('../Models/User');

// TODO check if user authorized
function authorizedUser(req, res, next) {
  const userID = req.session.user;
  if (userID) {
    next();
  } else {
    res.render('restricted');
  }
}

// display user's missions + casefiles when user is logged in
router.get('/api/missions', (req, res, next) => {
  let files = {};
  // TODO where user_id === logged_in user (req.session.user)
  let user = 1; // temporary workaround

  Mission.forge().where({user_id: user}).fetchAll({withRelated: ['casefile'], debug:true})
  .then((mission) => {
    // convert data to JSON
    mission = mission.toJSON();
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
  console.log("hi, adding new mission", req.body); // hi, adding mission { name: 'I LIKE LEMURS', user_id: 1 }
  let username, new_url, next_id;

  // set the value of the next id in the mission table, avoiding duplicate key errors
  bookshelf.knex.raw('SELECT setval(\'missions_id_seq\', (SELECT MAX(id) FROM missions)+1)');
  console.log("next value", bookshelf.knex.raw('SELECT nextval(\'missions_id_seq\''));
  // get last mission id - TODO I don't think this is the correct way to do this AT ALL
  Mission.count('id').
  then((count) => {
    next_id = parseInt(count)+1;
  })

  // get user name from user id for mission url - TODO is this still necessary??? I don't think it is...
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
      // save mission name, user_id, and url to mission table
      // casefile_id will be updated in patch when selected
      Mission.forge().where({last_id: true})
        .save({last_id: false}, {patch: true})
      })
    .then(() => {
      Mission.forge({name: req.body.name, user_id: req.body.user_id, url: new_url, last_id: true})
      .save()
      .then((mission) => {
        console.log("new mmissioin name saved", mission.attributes);
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

// update mission with casefile_id
router.patch('/api/update-mission', (req, res, next) => {
  console.log("patching!", req.body); // TODO the casefile_id is wrong here...
  // NOTE should work with 'Save New Mission' button and TODO 'Save Case File' button
  // I wonder if I can call this method *from* casefiles route rather than trying to recreate it...
  // this works as desired ====== patching! { name: 'new mission', casefile_id: 2 }
  Mission.forge().where({name: req.body.name}).fetch()
    .then((mission) => {
      // update mission with selected casefile_id
      console.log("fetched mission to patch", mission); //this is null...
      Mission.forge().where({id: mission.attributes.id})
        .save({casefile_id: req.body.casefile_id+1}, {patch: true}) //TODO get casefile_id a better way
        .then((res) => {
          console.log("mission updated successfully", res);
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

router.delete('/api/delete-mission/:name', (req, res, next) => {
  console.log("you are in the mission delete route and you are deleting mission: ", req.params.name);
  Mission.forge().where({name: req.params.name})
    .fetch({require: true})
    .then((mission) => {
      mission.destroy()
      .then(() => {
        console.log("mission", req.params.name, "successfully deleted");
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

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
  let files = {};
  // TODO where user_id === logged_in user (req.session.user)
  let user = 1; // temporary workaround

  Mission.forge().where({user_id: user}).fetchAll({withRelated: ['casefile'], debug:true})
  .then((mission) => {
    // convert data to JSON
    mission = mission.toJSON();
    //console.log("these are all the missions", mission);
    // loop over data to get mission and casefile names
    for (var i = 0; i < mission.length; i++) {
      // save to files object
      if (mission[i].casefile && mission[i].casefile.name) {
        files[mission[i].name] = mission[i].casefile.name;
      } else {
        files[mission[i].name] = "no casefile added";
      }
    }
    // send files object
    res.send(files)
  })
});

router.get('/api/view-mission/:name', function(req, res, next) {
  let article_files = [];
  let missionid, casefileid;
  console.log("successnesses", req.params.name);
  let mission_name = req.params.name.replace('_', " \s");
  console.log("mission name", mission_name);
  // get the casefile_id
  Mission.forge().where({name: mission_name}).fetch()
  .then((mission) => {
    mission = mission.toJSON();
    console.log("casefile id",  mission.casefile_id);
    //console.log(mission[0].casefile.name);
    //get casefile name from mission.casefile_id
    //get articles from articles.casefile_id
    Article.forge().where({casefile_id: mission.casefile_id}).fetchAll()
      .then((articles) => {
        console.log("fetching articles", articles.toJSON());
        console.log("squirrrrrel magic", articles.toJSON()[0].article);
        for (var i = 0; i < articles.length; i++) {
          article_files.push(articles.toJSON()[i].article);
        }
        //article_files.push(articles.toJSON());
      })
      .catch((err) => {
        console.log("articles error", err);
      })
  })
  .catch((err) => {
    console.log("mission fetching error", err);
  })
  res.send(article_files);
 })

 // get mission by ID
 router.get('/api/view-mission/:name', function(req, res, next) {
   let article_files = [];
   let missionid, casefileid;
   console.log("successnesses", req.params.name);
   let mission_name = req.params.name.replace('_', " \s");
   console.log("mission name", mission_name);
   // get the casefile_id
   Mission.forge().where({name: mission_name}).fetch()
   .then((mission) => {
     mission = mission.toJSON();
     console.log("casefile id",  mission.casefile_id);
     //console.log(mission[0].casefile.name);
     //get casefile name from mission.casefile_id
     //get articles from articles.casefile_id
     Article.forge().where({casefile_id: mission.casefile_id}).fetchAll()
       .then((articles) => {
         console.log("fetching articles", articles.toJSON());
         console.log("squirrrrrel magic", articles.toJSON()[0].article);
         for (var i = 0; i < articles.length; i+) {
           article_files.push(articles.toJSON()[i].article);
         }
         //article_files.push(articles.toJSON());
       })
       .catch((err) => {
         console.log("articles error", err);
       })
   })
   .catch((err) => {
     console.log("mission fetching error", err);
   })
   res.send(article_files);
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
      new_url = '/' + username + '/' + next_id; //TODO get rid of this or FIX IT
    })
    .then(() => {
      Mission.forge({name: req.body.name, user_id: req.body.user_id, url: new_url, last_id: true})
     .save()
     .then((mission) => {
        console.log("new mmissioin name saved", mission.attributes);
       res.sendStatus(200);
     })
     })
      // save mission name, casefile_id, user_id, and url to mission table

      //casefile_id: req.body.casefile_id,
      // Mission.forge({name: req.body.name, user_id: req.body.user_id, url: new_url})
      // .save()
      // .then((mission) => {
      //   res.sendStatus(200);
      // })
      .catch((err) => {
        next(err);
      })

    .catch((err) => {
      next(err);
    })
})
module.exports = router;

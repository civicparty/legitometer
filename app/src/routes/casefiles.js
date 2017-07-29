var express = require('express');
var router = express.Router();
const bookshelf = require('../../db/knex');

const Casefile = require('../Models/Casefile');
const User = require('../Models/User');
const Article = require('../Models/Article');
const Mission = require('../Models/Mission');

router.get('/api/casefiles', (req, res, next) => {
  Casefile.forge().fetchAll()
    .then((casefiles) => {
      let files = [];
      casefiles = casefiles.toJSON();
      for (var i = 0; i < casefiles.length; i++) {
        // get id, name, and createdBy from table
        files.push([casefiles[i].id, casefiles[i].name, casefiles[i].createdBy]);
      }
      // console.log("send this", files);
      res.send(files);
    })
})

// TODO - this is terrible
router.post('/api/add-casefile', function(req, res, next) {
  console.log("posting new casefile", req.body);
  let username, new_casefile;

  bookshelf.knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles)+1)');

  // get user name from user id TODO change to: User.forge().where({id: req.session.user}).fetch()
  User.forge().where({id: 1}).fetch()
  .then((user) => {
    console.log("add casefile then #1");
    user = user.toJSON();
    username = user.name;
  })
  .then(() => {
    // save name and createdBy to casefile table
    console.log("add casefile then #2");
    Casefile.forge({name: req.body.name, createdBy: username})
    .save()
    .then((casefile) => {
      // set casefile id here
      console.log("add casefile then #2.1");
      new_casefile = casefile.attributes.id;
      console.log("casefile saved", casefile.toJSON());
    })
    .catch((err) => {
      next(err);
    })
  })
  .then(() => {
    // save the casefile_id and article data for each input article
    console.log("add casefile then #3");
    for (var i = 0; i < req.body.articles.length; i++) {
      bookshelf.knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles)+1)');

      Article.forge({casefile_id: new_casefile, article: {headline: req.body.articles[i].name, url: req.body.articles[i].url, type: req.body.articles[i].type, }})
      .save()
    }
  })
  .then(() => { // TODO can access mission .patch here instead of recreating it?
    // update mission table TODO - HOW TO ACCESS THE MISSION (not with req.body.name) - WITH LAST ID IN TABLE???
    console.log("add casefile then #4");
    console.log("NEW CASEFILE ADDED. HERE we are trying to add the new casefile to the new mission");
    Mission.fetchAll()
      .then((missions) => {
        console.log("add casefile patch mission then #4/1");
        console.log("well, fine, i've fetched all the missions. last id: ", missions.length); //icky but works
        Mission.forge().where({id: missions.length})
          .save({casefile_id: new_casefile}, {patch: true})
          .then((res) => {
            console.log("add casefile patch mission then #4/1/1");
            console.log("updated missions table with new casefile id", res);
          })
          .catch((err) => {
            next(err);
          })
      }) //end Mission.fetchAll()
  }) // end then
  .catch((err) => {
    console.log("all the things are bad", err);
  })
 });

module.exports = router;

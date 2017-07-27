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
  console.log("next casefile val", bookshelf.knex.raw('SELECT nextval(\'casefiles_id_seq\''));
  // get last id in table and add 1 for the next id TODO find another way to do it
  // Casefile.count('id').
  // then((count) => {
  //   new_casefile = parseInt(count)+1;
  // })
  // TODO change to: User.forge().where({id: req.session.user}).fetch()
  // get user name from user id
  User.forge().where({id: 1}).fetch()
  .then((user) => {
    user = user.toJSON();
    username = user.name;
  })
  .then(() => {
    // save name and createdBy to casefile table
    Casefile.forge({name: req.body.name, createdBy: username})
    .save()
    .then((casefile) => {
      // set casefile id here
      new_casefile = casefile.attributes.id;
      console.log("casefile", casefile.toJSON(), casefile.attributes.id);
    })
  })
  .then(() => {
    // save the casefile_id and article data for each input article
    for (var i = 0; i < req.body.articles.length; i++) {
      bookshelf.knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles)+1)');
      console.log("next article val", bookshelf.knex.raw('SELECT nextval(\'articles_id_seq\''));


      Article.forge({casefile_id: new_casefile, article: {headline: req.body.articles[i].name, url: req.body.articles[i].url, type: req.body.articles[i].type, }})
      .save()

    }
  })
  .then(() => { // TODO can access mission .patch here instead of recreating it?
    // update mission table TODO - HOW TO ACCESS THE MISSION (not with req.body.name) - WITH LAST ID IN TABLE???
    console.log("NEW CASEFILE ADDED. HERE we are trying to add the new casefile to the new mission");
    Mission.fetchAll()
      .then((missions) => {
        console.log("well, fine, i've fetched all the missions", missions.length); //icky but works
        Mission.forge().where({id: missions.length})
          .save({casefile_id: new_casefile}, {patch: true})
          .then((res) => {
            console.log("updated missions table with new casefile id", res);
          })
          .catch((err) => {
            next(err);
          })
      })
    //
    // Mission.forge().where({id: req.body.name}).fetch()
    //   .then((mission) => {
    //     // update mission with selected casefile_id
    //     console.log("fetched mission", mission); //this is null...
    //     Mission.forge().where({id: mission.attributes.id})
    //       .save({casefile_id: req.body.casefile_id+1}, {patch: true}) //TODO get casefile_id a better way
    //       .then((res) => {
    //         console.log("mission updated successfully", res);
    //       })
    //       .catch((err) => {
    //         next(err);
    //       })
    //   })
    //   .catch((err) => {
    //     next(err);
    //   })

  }) // end then
  .catch((err) => {
    console.log("all the things are bad", err);
  })
 });

module.exports = router;

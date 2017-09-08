var express = require('express');
var router = express.Router();
const bookshelf = require('../db/knex');

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

router.post('/api/add-casefile', function(req, res, next) {
  console.log("posting new casefile", req.body);
  let username, new_casefile;

  // TODO change to: User.forge().where({id: req.session.user}).fetch()
  // get username from session user for casefile
  // TODO doesn't seem to get here...no console.logs below here show up
  User.forge().where({id: 1}).fetch()
  .then((user) => {
    console.log("add casefile then #1");
    user = user.toJSON();
    username = user.name;
  })
  .then(() => {
    // save name and createdBy to casefile table
    console.log("add casefile then #2");
    bookshelf.knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles)+1)');
    console.log("next value", bookshelf.knex.raw('SELECT nextval(\'casefiles_id_seq\''));

    Casefile.forge({name: req.body.name, createdBy: username})
    .save()
    .then((casefile) => {
      // set casefile id here to add to articles and missions table later
      new_casefile = casefile.attributes.id;
      console.log("casefile saved", casefile.toJSON());
      // save the casefile_id and article data for each input article
      console.log("adding articles");
      for (var i = 0; i < req.body.articles.length; i++) {
        bookshelf.knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles)+1)');
        Article.forge({casefile_id: new_casefile, article: {headline: req.body.articles[i].name, url: req.body.articles[i].url, type: req.body.articles[i].type, }})
        .save()
      }
      // add casefile id to mission
      console.log("add the new casefile to the new mission");
      // add casefile_id (new_casefile) to the mission created earlier

      Mission.fetchAll()
        .then((missions) => {
          console.log("well, fine, i've fetched all the missions. last id-ish: ", missions.length); //icky but works ... until you delete some...
          Mission.forge().where({last_id:true})
            .save({casefile_id: new_casefile}, {patch: true})
            .then((res) => {
              console.log("updated missions table with new casefile id", res);
            })
            .catch((err) => {
              next(err);
            })
        }) //end Mission.fetchAll()
        .catch((err) => {
          next(err);
        })
      }) // end casefile then
  })
  .catch((err) => {
    console.log("all the things are bad", err);
  })
 });

module.exports = router;

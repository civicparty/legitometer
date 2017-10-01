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
        files.push({
          id: casefiles[i].id,
          name: casefiles[i].name,
          createdBy: casefiles[i].createdBy,
        });
      }

      res.send(files);
    })
})

router.get('/api/casefile/:id', (req, res, next) => {
  Casefile.forge().where({id: req.params.id}).fetch()
    .then((data) => {
      file = data.toJSON();
      res.send(file);
    })
})

router.post('/api/add-casefile', function(req, res, next) {
  let username, new_casefile;

  // TODO change to: User.forge().where({id: req.session.user}).fetch()
  // get username from session user for casefile
  User.forge().where({id: 1}).fetch()
  .then((user) => {
    user = user.toJSON();
    username = user.name;
  })
  .then(() => {
    // save name and createdBy to casefile table
    bookshelf.knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles)+1)');

    Casefile.forge({name: req.body.name, createdBy: username})
    .save()
    .then((casefile) => {
      new_casefile = casefile.attributes.id;
      // save the casefile_id and article data for each input article
      for (var i = 0; i < req.body.articles.length; i++) {
        bookshelf.knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles)+1)');
        Article.forge({casefile_id: new_casefile, article: {headline: req.body.articles[i].name, url: req.body.articles[i].url, type: req.body.articles[i].type, }})
        .save()
      }
      // save casefile_id to mission table
      Mission.fetchAll()
        .then((missions) => {
          Mission.forge().where({last_id:true})
            .save({casefile_id: new_casefile}, {patch: true})
            .then((response) => {
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
  })
  .catch((err) => {
    console.log("post new casefile error", err);
  })
 });

module.exports = router;

var express = require('express');
var router = express.Router();
const bookshelf = require('../../db/knex');

const Casefile = require('../Models/Casefile');
const User = require('../Models/User');
const Article = require('../Models/Article');

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
  console.log("hello");
  console.log("posting new casefile", req.body);
  let username, new_casefile;

  bookshelf.knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles)+1)');

  // get last id in table and add 1 for the next id
  Casefile.count('id').
  then((count) => {
    new_casefile = parseInt(count)+1;
  })
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
      console.log("casefile", casefile.toJSON());
    })
  })
  .then(() => {
    console.log("then the articles!", req.body.articles);
    console.log("loop over the articles");
    // save the casefile_id and article data for each input article
    for (var i = 0; i < req.body.articles.length; i++) {
      console.log(req.body.articles[i].headline, req.body.articles[i].url, req.body.articles[i].type);
      bookshelf.knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles)+1)');

      Article.forge({casefile_id: new_casefile, article: {headline: req.body.articles[i].headline, url: req.body.articles[i].url, type: req.body.articles[i].type, }})
      .save()

    }
  })
  .catch((err) => {
    console.log("all the things are bad", err);
  })
 });

module.exports = router;

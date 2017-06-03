var express = require('express');
var router = express.Router();
const bookshelf = require('../../db/knex');

const Casefile = require('../Models/Casefile');
const User = require('../Models/User');

router.get('/api/casefiles', (req, res, next) => {
  Casefile.forge().fetchAll()
    .then((casefiles) => {
      let files = [];
      casefiles = casefiles.toJSON();
      for (var i = 0; i < casefiles.length; i++) {
        // get id, name, and createdBy from table
        files.push([casefiles[i].id, casefiles[i].name, casefiles[i].createdBy]);
      }
      console.log("send this", files);
      // TODO but we're also going to need a link to the articles associated with that casefile...
      res.send(files);
    })
})

router.post('/api/add-casefile', function(req, res, next) {
  console.log("posting new casefile", req.body.name);
  let username;

  bookshelf.knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles)+1)')

  //User.forge().where({id: req.session.user}).fetch()
  User.forge().where({id: 1}).fetch()
  .then((user) => {
    user = user.toJSON();
    username = user.name;
  })
  .then(() => {
    Casefile.forge({name: req.body.name, createdBy: username})
    .save()
    .then((casefile) => {
      console.log(casefile.toJSON());
    })
  })
  .then(() => {
    // TODO loop over req.body.articles and add to articles table?
  })
  .catch((err) => {
    console.log("all the things are bad", err);
  })

 });

/* GET collections listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

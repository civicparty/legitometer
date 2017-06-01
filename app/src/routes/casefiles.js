var express = require('express');
var router = express.Router();
const bookshelf = require('../../db/knex')

const Casefile = require('../Models/Casefile')

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
  console.log("posting new casefile");
  knex.raw('SELECT setval(\'casefiles_id_seq\', (SELECT MAX(id) FROM casefiles))')
  .then(() => {
    knex('casefiles').insert({
      name: req.body.name,
      createdBy: req.body.createdBy,
    }, '*')
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
  });
});

/* GET collections listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

var express = require('express');
var router = express.Router();
const bookshelf = require('../../db/knex')

const Casefile = require('../Models/Casefile')

router.get('/api/casefiles', function(req, res, next) {
  Casefile.forge().fetchAll()
    .then((casefiles) => {
      res.json({error: false, data: casefiles.toJSON()});
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

var express = require('express');
var router = express.Router();
const knex = require('../../db/knex')

router.get('/collections/api', function(req, res, next) {
  console.log("hello from the collections route");
  req.session.user = 1;
  knex('collections')
    .then((collections) => {
      res.send(collections)
    });
})

/* GET collections listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

var express = require('express');
const knex = require('../db/knex');
var router = express.Router();

/* GET users listing. */
// router.get('/users/login', function(req, res, next) {
// });

router.post('/api/add-user', (req, res, next) => {
  knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))')
  .then(() => {
    // knex insert here
  })

})
module.exports = router;

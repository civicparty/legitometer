var express = require('express');
const knex = require('../../db/knex');
var router = express.Router();

/* GET users listing. */
// router.get('/users/login', function(req, res, next) {
// });

// knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))')

module.exports = router;

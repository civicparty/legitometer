const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');

router.get('/articles/api', function(req, res, next) {

  knex('articles')
    .where('collection_id', 1)
    .then((articles) => {
      res.send(articles);
    })

});

module.exports = router;

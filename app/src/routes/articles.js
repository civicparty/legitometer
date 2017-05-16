const express = require('express');
const router = express.Router();
const knex = require('../../db/knex');

router.get('/api/articles', function(req, res, next) {

  knex('articles')
    .where('casefile_id', 1)   // where casefile_id === the one we want
    .then((articles) => {
      res.send(articles);
    })

});

router.post('/api/add-article', function(req, res, next) {
  
})

module.exports = router;

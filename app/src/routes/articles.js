const express = require('express');
const router = express.Router();
const bookshelf = require('../../db/knex');

const Article = require('../Models/Article.js');

// display articles when casefile selected
router.get('/api/articles', function(req, res, next) {
  Article.forge().fetchAll()
  .then((articles) => {
     res.json({error: false, data: articles.toJSON()});
   })
});


router.post('/api/add-article', function(req, res, next) {
  // articles are posted in the casefiles route

}); //end post

module.exports = router;

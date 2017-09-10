const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Article = require('../Models/Article.js');

// display articles when casefile selected or send articles to student form
// TODO get only where casefile_id matches . . . where does that come from???
router.get('/api/articles', (req, res, next) => {
  Article.forge().fetchAll()
  .then((articles) => {
    console.log("hello, getting stuff");
     let files = [];
     articles = articles.toJSON();
     for (var i = 0; i < articles.length; i++) {
       files.push(articles[i]);
     }
     res.send(files);
   })
});

// articles are POSTed in routes/casefiles.js 

module.exports = router;

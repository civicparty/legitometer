const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Article = require('../Models/Article.js');

router.get('/api/articles', (req, res, next) => {
  Article.forge().fetchAll()
  .then((articles) => {
    console.log("hello, getting stuff omgwtf");
     let files = [];
     articles = articles.toJSON();
     for (var i = 0; i < articles.length; i++) {
       files.push(articles[i]);
     }
     res.send(files);
   })
});

// display articles when casefile selected or send articles to student form
// TODO
router.get('/api/articles/:id', (req, res, next) => {
  console.log("woohoo", req.params.id);
  Article.forge().where({casefile_id: req.params.id}).fetchAll()
  .then((articles) => {
    console.log("alright well here we are then", articles);
    let files = [];
    articles = articles.toJSON();
    console.log("howz it look now then?", articles.length, "fin");
    for (var i = 0; i < articles.length; i++) {
      files.push([articles[i].article.headline, articles[i].article.url, articles[i].article.type]);
    }
    console.log("and now?", files);
    res.send(files);
  })
})

// articles are POSTed in routes/casefiles.js

module.exports = router;

const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Article = require('../Models/Article.js');
const Casefile = require('../Models/Casefile.js');
const Mission = require('../Models/Mission.js');

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

// get one article for student form
router.get('/api/articles/:id', (req, res, next) => {
  console.log("getting article with id", req.params.id);
  Article.forge().where({id: req.params.id}).fetch()
    .then((article) => {
      // TODO fill in functionality as needed
      res.send(article);
    })
})

router.put('/api/update-article/:id', (req, res, next) => {
  Article.forge().where({id: req.params.id})
    .fetch()
    .then((article) => {
      article.save({
        article: {
          url: req.body.url,
          type: req.body.type,
          headline: req.body.headline,
        }
      }, { patch: true })
        .then((article) => {
          res.status(200).json(article)
        })
        .catch((err) => {
          console.log(err, err.message)
        })
    })
    .catch(function (err) {
      res.status(500).json({
        error: true,
        data: {
          message: `POO: ${err.message}`
        }
      });
    });
})

// get articles by casefile id
router.get('/api/casefile/:id/articles', (req, res, next) => {
  console.log("getting articles by casefile id", req.params.id);
  // get all articles where casefile id is req.params.id
  Article.forge().where({casefile_id: req.params.id}).fetchAll()
    .then((articles) => {
      //TODO fill in functionality as needed
      let files = [];
      articles = articles.toJSON();
      for (var i = 0; i < articles.length; i++) {
        files.push({
          id: articles[i].id,
          index: i,
          url: articles[i].article.url,
          type: articles[i].article.type,
          headline: articles[i].article.headline,
        });
      }
      res.send(files);
    })
})

// display articles when casefile selected or send articles to student form
router.get('/api/articles/review/:name', (req, res, next) => {
  console.log("woohoo", req.params.name);
  let missionName = req.params.name.replace(/_/g, ' ');
  // need to get casefile id from the mission table
  let casefile_id;
  Mission.forge().where({name: missionName}).fetch()
  .then((mission) => {
    console.log("casefile id is", mission.attributes.casefile_id);
    casefile_id = mission.attributes.casefile_id;
    Article.forge().where({casefile_id: casefile_id}).fetchAll()
    .then((articles) => {
      let files = [];
      articles = articles.toJSON();
      for (var i = 0; i < articles.length; i++) {
        files.push([articles[i].article.headline, articles[i].article.url, articles[i].article.type]);
      }
      if (files.length > 0) {
        res.send(files);
      } else {
        res.send("No Articles Found")
      }
    })
  })
})

// articles are POSTed in routes/casefiles.js

module.exports = router;

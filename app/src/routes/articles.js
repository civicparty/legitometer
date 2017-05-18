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

// it is never getting here
router.post('/api/add-article', function(req, res, next) {
  console.log("add article route", req.body);
  // knex.raw('SELECT setval(\'articles_id_seq\', (SELECT MAX(id) FROM articles))')

  // .then(() => {
  //   console.log("add article", req.body);
  //   // knex insert here
  //   // knex('articles').insert({
  //   //   casefile_id: ,
  //   //   article: {headline: ,
  //   //             url: ,
  //   //             type: }
  //   // }, '*')
  //   .then(() => {
  //     res.sendStatus(200);
  //   })
  //   .catch((err) => {
  //     next(err);
  //   })
  // }); //end then
}); //end post

module.exports = router;

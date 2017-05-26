const express = require('express');
const router = express.Router();
const bookshelf = require('../../db/knex');

const Review = require('../Models/Review.js');

router.get('/api/reviews', function(req, res, next) {
  console.log("partial success, yeah?");
  Review.fetchAll()
  .then((reviews) => {
    console.log("hello");
    //res.send(reviews)
    res.json({error: false, data: reviews.toJSON()});
  })
  .catch((err) => {
    res.send(err);
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const bookshelf = require('../../db/knex');

const Review = require('../Models/Review.js');

router.get('/api/reviews', function(req, res, next) {
  Review.forge().fetchAll() // create a new Review object and fetch all from the table
  .then((reviews) => {
    res.json({error: false, data: reviews.toJSON()});
  })
  .catch((err) => {
    res.send(err);
  });
});

module.exports = router;

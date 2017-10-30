const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Review = require('../Models/Review');
const Reviewer = require ('../Models/Reviewer');

// get all reviews - probably not a needed function
router.get('/api/reviews', (req, res, next) => {
  let files = {};

  Review.forge().fetchAll()
  .then((reviews) => {
    reviews = reviews.toJSON();
    for (var i = 0; i < reviews.length; i++) {
      // get id, name, and createdBy from table
      files.push([reviews[i].group_id, reviews[i].mission_id]);
    }
    res.send(files);
  })
  .catch((err) => {
    res.send(err);
  });
});

// get reviews by mission id
router.get('/api/reviews/:mission_id', (req, res, next) => {
  let reviewsArray = [];
  console.log("in route", req.params.mission_id);
  // use withrelated
  Review.forge().where({mission_id: req.params.mission_id})
  .fetchAll()
  .then((reviews) => {
    reviews = reviews.serialize();
    for (var i = 0; i < reviews.length; i++) {
      reviewsArray[i] = [reviews[i].group_id, reviews[i].id]
    }
    console.log("array", reviewsArray);
    res.send(reviewsArray);
  })
  .catch((err) => {
    console.log("review by mission id error", err);
  })
})

// POST - A new review is posted when the group is posted in GroupNames.js -> groups.js


module.exports = router;

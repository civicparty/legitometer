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

// get review by group id
router.get('/api/reviews/:id', (req, res, next) => {
  Review.forge().where({group_id: req.params.id}).fetch()
  .then((review) => {
    console.log("fetched review", review);
  })
  .catch((err) => {
    console.log("review by id error", err);
  })
})

// get reviews by mission id
router.get('/api/reviews/mission/:mission_id', (req, res, next) => {
  let reviewsArray = [];
  console.log("in route", req.params.mission_id);
  // use withrelated
  Review.forge().where({mission_id: req.params.mission_id})
  .fetchAll()
  .then((reviews) => {
    reviews = reviews.serialize();
    for (var i = 0; i < reviews.length; i++) {
      reviewsArray[i] = {
        "group_id": reviews[i].group_id,
        "review_id": reviews[i].id
      }
    }
    res.send(reviewsArray);
  })
  .catch((err) => {
    console.log("review by mission id error", err);
  })
})

// POST - A new review is posted when the group is posted in GroupNames.js -> groups.js


module.exports = router;

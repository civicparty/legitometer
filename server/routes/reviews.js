const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Review = require('../Models/Review.js');

router.get('/api/reviews', function(req, res, next) {
  let files = {};

  Review.forge().fetchAll() // create a new Review object and fetch all from the table
  .then((reviews) => {
    reviews = reviews.toJSON();
    for (var i = 0; i < reviews.length; i++) {
      // get id, name, and createdBy from table
      files.push([reviews[i].group_id, reviews[i].mission_id]);
    }
    // table.increments('id');
    // table.integer('group_id').references('groups.id').onDelete('CASCADE');
    // table.integer('mission_id').references('missions.id').onDelete('CASCADE');
    res.send(files);
  })
  .catch((err) => {
    res.send(err);
  });
});

// get reviews by group id
router.get('/api/reviews/:id', function(req, res, next) {
  Review.forge().where({group_id: req.params.id}).fetch()
  .then((review) => {
    console.log("fetched review", review);
  })
  .catch((err) => {
    console.log("review by id error", err);
  })
})

//NOT USED - the new review is posted when the group is posted in GroupNames.js -> groups.js
// router.post('/api/add-review', function(req, res, next) {
//   console.log("made it to the review post route, here's the stuff: ", req.body);
//   // on initial submit, save group_id and mission_id to reviews table, return review_id
//   // how to tell it is initial submit?
//   Review.forge({
//     group_id: req.body.groupid,
//     mission_id: req.body.missionid,
//   })
//   .save()
//   .then((review) => {
//     res.send(review.id);
//     res.sendStatus(200);
//   })
//   .catch((err) => {
//     next(err);
//   })
//
// })

module.exports = router;

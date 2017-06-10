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

router.post('/api/add-review', function(req, res, next) {
  console.log("made it to the review post route, here's the stuff: ", req.body);
})

module.exports = router;

// reviews table
// table.integer('user_id').references('users.id')
// table.integer('mission_id').references('missions.id')
// table.json('answers');

// {id: 1, user_id: 2, mission_id: 1,
//   answers: {
//     publisher_name: 'Sprocket', // references to questions rather than "publisher_name, etc"
//     author: 'your mom',
//     headline: 'I like fish',
//     published_date: '01/03/1983',
//     summary: 'Fish are tasty',
//     sources: 'My mouth',
//     ads: 'minimal',
//     objectivity: 'none',
//     page_design: 'no',
//     spelling: 'lots',
//     article_type: 'opinion',
//     credibility_rating: 3,
//     reputablity_rating: 4,
//     citation_rating: 2,
//     headline_rating: 5
//     }
//   },

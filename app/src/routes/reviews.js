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
  // user_id === teacher id
  // mission_id
  // members === string - take each entered name, insert a comma, concatenate to string, then save
  // answers - json object
  bookshelf.knex.raw('SELECT setval(\'reviews_id_seq\', (SELECT MAX(id) FROM reviews)+1)');

  Review.forge({user_id: 1, mission_id: req.body.mission_id, members: req.body.members, answers: req.body.answers})
    .save()
    .then((review) => {
      console.log("review post success", review);
    })
    .catch((err) => {
      console.log("review post error", err);
    })

}) //end add-review post

module.exports = router;

// reviews table
// table.integer('user_id').references('users.id')
// table.integer('mission_id').references('missions.id')
// table.string('members')
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

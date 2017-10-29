const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Response = require('../Models/Response.js');

// display all the responses for a group's review
router.get('/api/response/:review_id', (req, res, next) => {
  console.log("getting responses for review:", req.params.review_id);
  Response.forge().where({review_id: req.params.review_id}).fetchAll()
  .then((responses) => {
    console.log("fetched responses", responses);
    responses = responses.toJSON();
    res.send(responses);
  })
  .catch((err) => {
    console.log("error fetching responses", err);
  })
})

// add question and answer from a group's review
router.post('/api/add-response', (req, res, next) => {
  console.log("adding response", req.body.question, req.body.response, req.params.review_id);
  Response.forge({
    review_id: req.body.reviewId,
    question: req.body.question,
    questionType: req.body.questionType,
    response: req.body.response,
  })
  .save()
  .then((response) => {
    console.log("response success", response);
  })
  .catch((err) => {
    console.log("response error", err);
  })
})

module.exports = router;

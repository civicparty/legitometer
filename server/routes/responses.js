const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Response = require('../Models/Response.js');


router.get('/api/response/:review_id', (req, res, next) => {

})

router.patch('/api/add-response/:review_id', (req, res, next) => {
  console.log("adding response", req.body.question, req.body.response, req.params.review_id);
  Response.forge({
    question: req.body.question,
    response: req.body.response,
  }).where({review_id: req.params.review_id})
  .save()
  .then((response) => {
    console.log("response success", response);
  })
  .catch((err) => {
    console.log("response error", err);
  })
})







module.exports = router;

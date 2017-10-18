const express = require('express');
const router = express.Router();
const bookshelf = require('../db/knex');

const Response = require('../Models/Response.js');


router.get('/api/response/:review_id', (req, res, next) => {

})

router.post('/api/add-response', (req, res, next) => {
  console.log("adding response", req.body.question, req.body.response);
  Response.forge({
    review_id: 1, //TODO need to get this from somewhere
    question: req.body.question,
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

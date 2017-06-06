const bookshelf = require('../../db/knex');
const Review = require('../Models/Review');

const Reviews = bookshelf.Collection.extend({
  model: Review
});

module.exports = bookshelf.collection(Reviews)

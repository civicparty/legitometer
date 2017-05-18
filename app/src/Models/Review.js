'use strict';

const bookshelf = require('../../db/knex');

const Review = bookshelf.Model.extend({
  tableName: 'reviews',
});

module.exports = Review;

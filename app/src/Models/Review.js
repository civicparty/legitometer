'use strict';

const bookshelf = require('../../db/knex');

const Article = require('./Article');

const Review = bookshelf.Model.extend({
  tableName: 'reviews',
  hasTimestamps: true,
  article: function() {
    return this.belongsTo('Article')
  },
});

module.exports = bookshelf.model('Review', Review);

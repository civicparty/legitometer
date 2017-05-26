'use strict';

const bookshelf = require('../../db/knex');

require('./Article');
require('./User');

const Review = bookshelf.Model.extend({
  tableName: 'reviews',
  hasTimestamps: true,
  article: function() {
    return this.belongsTo('Article')
  },
  user: function() {
    return this.belongsTo('User');
  }
});

module.exports = bookshelf.model('Review', Review);

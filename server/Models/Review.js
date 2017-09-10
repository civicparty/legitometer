'use strict';

const bookshelf = require('../db/knex');

require('./Article');
require('./User');
require('./Group');

const Review = bookshelf.Model.extend({
  tableName: 'reviews',
  hasTimestamps: true,
  article: function() {
    return this.belongsTo('Article')
  },
  user: function() {
    return this.belongsTo('User');
  },
  group: function() {
    return this.belongsTo('Group');
  }
});

module.exports = bookshelf.model('Review', Review);

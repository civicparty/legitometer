'use strict';

const bookshelf = require('../db/knex');

require('./Article');
require('./User');
require('./Group');
require('./Response');
require('./Reviewer');

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
  },
  response: function() {
    return this.hasMany('Response');
  },
  reviewer: function() {
    return this.belongsTo('Reviewer');
  }
});

module.exports = bookshelf.model('Review', Review);

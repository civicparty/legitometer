'use strict';

const bookshelf = require('../db/knex');

require('./Review');
require('./Mission');
require('./Reviewer');

const Group = bookshelf.Model.extend({
  tableName: 'groups',
  hasTimestamps: true,
  review: function() {
    return this.hasMany('Review')
  },
  mission: function() {
    return this.belongsTo('Mission');
  },
  reviewer: function() {
    return this.hasMany('Reviewer');
  }
});

module.exports = bookshelf.model('Group', Group);


// Review belongs to Group
// Groups have many reviews

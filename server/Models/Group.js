'use strict';

const bookshelf = require('../db/knex');

require('./Review');

const Group = bookshelf.Model.extend({
  tableName: 'groups',
  hasTimestamps: true,
  review: function() {
    return this.hasMany('Review')
  },
});

module.exports = bookshelf.model('Group', Group);


// Review belongs to Group
// Groups have many reviews

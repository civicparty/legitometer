'use strict';

const bookshelf = require('../db/knex');

require('./Review');
require('./Group');

const Reviewer = bookshelf.Model.extend({
  tableName: 'reviewers',
  hasTimestamps: true,
  review: function() {
    return this.hasMany('Review')
  },
  group: function() {
    return this.belongsTo('Group')
  }
});

module.exports = bookshelf.model('Reviewer', Reviewer);

// reviewers have many reviews
// reviewers belong to a group
// reviewers can belong to more than one group
// a group has reviewers

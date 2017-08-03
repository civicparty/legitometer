'use strict';

const bookshelf = require('../db/knex');

require('./Review');
require('./Mission');
require('./Casefile');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  missions: function() {
    return this.hasMany('Mission', 'id');
  },
  reviews: function() {
    return this.hasMany('Review');
  },
  casefiles: function() {
    return this.hasMany('Casefile').through('Mission');
  }, //i think this is right. users have many casefiles, but casefiles don't necessarily have users (is that true?)
});

module.exports = bookshelf.model('User', User);

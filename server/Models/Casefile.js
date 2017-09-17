'use strict';

const bookshelf = require('../db/knex');

require('./User');
require('./Article');
require('./Mission');

const Casefile = bookshelf.Model.extend({
  tableName: 'casefiles',
  hasTimestamps: true,
  articles: function() {
    return this.hasMany('Article', 'id');
  },
  missions: function() {
    return this.hasMany('Mission', 'id');
  },
  user: function() {
    return this.belongsTo('User', 'id').through('Mission');
  }, //yes?
});

module.exports = bookshelf.model('Casefile', Casefile);

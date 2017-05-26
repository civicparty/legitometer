'use strict';

const bookshelf = require('../../db/knex');

require('./User');
require('./Article');
require('./Mission');

const Casefile = bookshelf.Model.extend({
  tableName: 'casefiles',
  hasTimestamps: true,
  articles: function() {
    return this.hasMany('Article');
  },
  mission: function() {
    return this.belongsTo('Mission');
  },
  user: function() {
    return this.belongsTo('User').through('Mission');
  }, //yes?
});

module.exports = bookshelf.model('Casefile', Casefile);

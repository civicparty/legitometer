'use strict';

const bookshelf = require('../../db/knex');

const Article = require('./Article');

const Casefile = bookshelf.Model.extend({
  tableName: 'casefiles',
  hasTimestamps: true,
  articles: function() {
    this.hasMany('Article');
  },
});

module.exports = bookshelf.model('Casefile', Casefile);

'use strict';

const bookshelf = require('../../db/knex');

require('./Casefile');
require('./Article');

const Mission = bookshelf.Model.extend({
  tableName: 'missions',
  hasTimestamps: true,
  casefile: function() {
    this.hasOne('Casefile');
  },
  articles: function() {
    return this.hasMany('Article').through('Casefile');
  },
});

module.exports = bookshelf.model('Mission', Mission);

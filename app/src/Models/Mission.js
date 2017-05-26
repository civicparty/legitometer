'use strict';

const bookshelf = require('../../db/knex');

require('./Casefile');
require('./Article');
require('./User');

const Mission = bookshelf.Model.extend({
  tableName: 'missions',
  hasTimestamps: true,
  casefile: function() {
    return this.hasOne('Casefile');
  },
  articles: function() {
    return this.hasMany('Article').through('Casefile');
  },
  user: function() {
    return this.hasOne('User');
  }

});

module.exports = bookshelf.model('Mission', Mission);

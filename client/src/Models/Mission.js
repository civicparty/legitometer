'use strict';

const bookshelf = require('../../db/knex');

require('./Casefile');
require('./Article');
require('./User');

const Mission = bookshelf.Model.extend({
  tableName: 'missions',
  hasTimestamps: true,
  casefile: function() {
    return this.belongsTo('Casefile', 'casefile_id');
  },
  articles: function() {
    return this.hasMany('Article').through('Casefile');
  },
  user: function() {
    return this.hasOne('User', 'id'); //is this true?
  },

});

module.exports = bookshelf.model('Mission', Mission);

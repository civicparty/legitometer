'use strict';

const bookshelf = require('../db/knex');

require('./Review');
require('./Mission');
require('./Casefile');


const Article = bookshelf.Model.extend({
  tableName: 'articles',
  hasTimestamps: true,
  reviews: function() {
    return this.hasMany('Review');
  },
  mission: function() {
    return this.belongsTo('Mission', 'id').through('Casefile');
  },
  casefile: function() {
    return this.belongsTo('Casefile', 'casefile_id');
  },
});

module.exports = bookshelf.model('Article', Article);

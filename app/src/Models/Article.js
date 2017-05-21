'use strict';

const bookshelf = require('../../db/knex');

require('./Review');
require('./Mission');
require('./Casefile')


const Article = bookshelf.Model.extend({
  tableName: 'articles',
  hasTimestamps: true,
  reviews: function() {
    return this.hasMany('Review');
  },
  mission: function() {
    return this.belongsTo('Mission').through('Casefile');
  },
});

module.exports = bookshelf.model('Article', Article);

// z.B.
// require('./favorite');
// require('./subscriber');
//
// var User = Bookshelf.Model.extend({
//   tableName: 'users',
//   hasTimestamps: true,
//   favorites: function() {
//     return this.hasMany('Favorite');
//   },
//   profile: function() {
//     return this.hasOne('Subscriber');
//   }
// });

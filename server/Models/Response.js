'use strict';

const bookshelf = require('../db/knex');

require('./Group');
require('./Review');

const Response = bookshelf.Model.extend({
  tableName: 'responses',
  hasTimestamps: true,
  review: function() {
    return this.belongsTo('Review');
  }
});

module.exports = bookshelf.model('Response', Response);

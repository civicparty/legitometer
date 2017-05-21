'use strict';

const bookshelf = require('../../db/knex');

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

});

// module.exports = User;
module.exports = bookshelf.model('User', User);

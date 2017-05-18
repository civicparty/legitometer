'use strict';

const bookshelf = require('../../db/knex');

const User = bookshelf.Model.extend({
  tableName: 'users',
});

module.exports = User;

'use strict';

const bookshelf = require('../../db/knex');

const Class = bookshelf.Model.extend({
  tableName: 'classes',
});

module.exports = Class;

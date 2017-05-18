'use strict';

const bookshelf = require('../../db/knex');

const Teacher = bookshelf.Model.extend({
  tableName: 'teachers',
});

module.exports = Teacher;

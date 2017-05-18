'use strict';

const bookshelf = require('../../db/knex');

const Student = bookshelf.Model.extend({
  tableName: 'students',
});

module.exports = Student;

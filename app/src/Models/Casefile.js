'use strict';

const bookshelf = require('../../db/knex');

const Casefile = bookshelf.Model.extend({
  tableName: 'casefiles',
});

module.exports = Casefile;

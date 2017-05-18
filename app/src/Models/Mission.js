'use strict';

const bookshelf = require('../../db/knex');

const Mission = bookshelf.Model.extend({
  tableName: 'missions',
});

module.exports = Mission;

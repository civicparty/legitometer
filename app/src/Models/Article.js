'use strict';

const bookshelf = require('../../db/knex');

const Article = bookshelf.Model.extend({
  tableName: 'articles',
});

module.exports = Article;

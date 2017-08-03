const bookshelf = require('../../db/knex');
const Article = require('../Models/Article');

const Articles = bookshelf.Collection.extend({
  model: Article
});

module.exports = bookshelf.collection(Articles)

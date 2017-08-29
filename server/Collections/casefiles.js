const bookshelf = require('../db/knex');
const Casefiles = require('../Models/Casefile');

const Casefiles = bookshelf.Collection.extend({
  model: Casefiles
});

module.exports = bookshelf.collection(Casefiless)

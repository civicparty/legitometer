const bookshelf = require('../../db/knex');
const Mission = require('../Models/Mission');

const Missions = bookshelf.Collection.extend({
  model: Mission
});

module.exports = bookshelf.collection(Missions)

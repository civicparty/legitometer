const bookshelf = require('../../db/knex');
const User = require('../Models/User');

const Users = bookshelf.Collection.extend({
  model: User
});

module.exports = bookshelf.collection(Users)

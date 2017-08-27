'use strict';

require('dotenv').config()

console.log("testing", process.env)
console.log("trying to connect to db in environment", process.env.NODE_ENV)
const env = process.env.NODE_ENV || 'production';
console.log('env:', env)
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);
const bookshelf = require('bookshelf')(knex);

// added based on tutorial, for exports like module.exports = db.model('User', User);
// supposed to help with more complex relationships
// This plugin allows you to specify relations between models using a string instead of passing variables.
bookshelf.plugin('registry'); // Resolve circular dependencies with relations

module.exports = bookshelf;

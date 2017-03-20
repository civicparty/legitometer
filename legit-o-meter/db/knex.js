'use strict';

const env = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile')[env];
const knex = require('knex')(knexConfig);

module.exports = knex;

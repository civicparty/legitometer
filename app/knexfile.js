// Update with your config settings.
require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'legit-o-meterdb',
    },
    debug: true,
  },

  production: {
    client: 'pg',
    connection: 'postgres://tacoplanet:' + process.env.DB_PASS + '@localhost/' + process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

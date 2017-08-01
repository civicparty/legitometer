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
    connection: 'postgres://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@localhost/'+ process.env.DB_NAME,
    // add this to production DATABASE_URL?  + '?ssl=true'
    // connection: {
    //   host:     'localhost',
    //   database: process.env.DB_NAME,
    //   user:     process.env.DB_USER,
    //   password: process.env.DB_PASS
    // },
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

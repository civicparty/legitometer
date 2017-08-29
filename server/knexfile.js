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
    connection: process.env.DATABASE_URL,
    // connection: 'postgres://lprnglrzmjxsqb:234f38ce6c058cdc0b9e409ec8c65cfb2e9038e4ba590992cb84ca3edd8c34d3@ec2-184-73-236-170.compute-1.amazonaws.com:5432/dhund3nvcgv3d',
    // TODO add this to production DATABASE_URL?  + '?ssl=true' ???
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

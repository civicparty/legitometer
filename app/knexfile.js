// Update with your config settings.

console.log(process.env)
console.log(process.env.DB_STRING)

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
    connection: {
      host:     '127.0.0.1',
      database: process.env.DATABASE_URL,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

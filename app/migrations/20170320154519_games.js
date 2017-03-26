
exports.up = knex =>
  knex.schema.createTable('games', (table) => {
    table.increments();
    table.string('name');
    table.integer('collection_id').references('collections.id').onDelete('CASCADE');
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.string('url');
    table.timestamps(true, true);
  })

exports.down = knex => knex.schema.dropTable('games');

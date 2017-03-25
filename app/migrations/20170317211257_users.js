
exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments();
    table.string('displayName');
    table.string('userName');
    table.timestamp(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('users')

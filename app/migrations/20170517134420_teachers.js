
exports.up = knex =>
  knex.schema.createTable('teachers', table => {
    table.increments();
    table.string('name');
    table.boolean('isAdmin');
    table.timestamp(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('teachers')

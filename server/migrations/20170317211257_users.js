// TODO is this table necessary?

exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('name');
    table.boolean('isAdmin');
    table.string('city');
    table.string('school');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('users')

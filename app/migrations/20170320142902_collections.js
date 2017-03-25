//collections
exports.up = knex =>
  knex.schema.createTable('collections', (table) => {
    table.increments();
    table.string('name');
    table.string('createdBy');
    table.timestamps(true, true);
  })

exports.down = knex => knex.schema.dropTable('collections');

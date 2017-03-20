//collections
exports.up = knex =>
  knex.schema.createTable('collections', (table) => {
    table.increments();
    table.string('name');
    table.string('createdBy');
    table.timestamps('created_at')
  })

exports.down = knex => knex.schema.dropTable('collections');

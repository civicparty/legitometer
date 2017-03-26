
exports.up = knex =>
  knex.schema.createTable('articles', (table) => {
    table.increments();
    table.string('headline');
    table.string('url');
  })
exports.down = knex =>
  knex.schema.dropTable('articles');

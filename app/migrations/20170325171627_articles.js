// articles table
exports.up = knex =>
  knex.schema.createTable('articles', (table) => {
    table.increments();
    table.integer('casefile_id').references('casefiles.id').onDelete('CASCADE');
    table.json('article');
  })
exports.down = knex =>
  knex.schema.dropTable('articles');

  // table.string('headline');
  // table.string('url');

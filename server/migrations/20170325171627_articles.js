// articles table
exports.up = knex =>
  knex.schema.createTable('articles', (table) => {
    table.increments('id');
    table.integer('casefile_id').references('casefiles.id').onDelete('CASCADE');
    table.json('article');
    table.timestamps(true, true);
  })
exports.down = knex =>
  knex.schema.dropTable('articles');

  // JSON {article} parts
  //  - string('headline');
  //  - string('url');
  //  - string('type');

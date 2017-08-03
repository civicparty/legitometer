//casefiles table
exports.up = knex =>
  knex.schema.createTable('casefiles', (table) => {
    table.increments('id');
    table.string('name');
    table.string('createdBy');
    table.timestamps(true, true);
  })

exports.down = knex => knex.schema.dropTable('casefiles');

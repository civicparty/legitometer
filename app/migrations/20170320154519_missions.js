// missions table
exports.up = knex =>
  knex.schema.createTable('missions', (table) => {
    table.increments('id');
    table.string('name');
    table.integer('casefile_id').references('casefiles.id').onDelete('CASCADE');
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.string('url');
    table.timestamps(true, true);
  })

exports.down = knex => knex.schema.dropTable('missions');

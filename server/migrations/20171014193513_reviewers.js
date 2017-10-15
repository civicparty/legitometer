
exports.up = knex =>
  knex.schema.createTable('reviewers', table => {
    table.increments('id');
    table.string('name');
    table.integer('group_id').references('groups.id').onDelete('CASCADE');
    table.timestamps(true, true);
  })

exports.down = knex =>
  knex.schema.dropTable('groups')

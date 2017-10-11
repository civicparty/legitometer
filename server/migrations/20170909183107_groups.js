
exports.up = knex =>
  knex.schema.createTable('groups', table => {
    table.increments('id');
    table.string('group_name');
    table.string('name');
    table.integer('mission_id').references('missions.id').onDelete('CASCADE');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('groups')

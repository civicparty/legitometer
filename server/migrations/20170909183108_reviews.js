
exports.up = knex =>
  knex.schema.createTable('reviews', table => {
    table.increments('id');
    table.integer('group_id').references('groups.id').onDelete('CASCADE');
    table.integer('mission_id').references('missions.id').onDelete('CASCADE');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('reviews')

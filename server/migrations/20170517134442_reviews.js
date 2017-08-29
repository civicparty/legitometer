
exports.up = knex =>
  knex.schema.createTable('reviews', table => {
    table.increments('id');
    table.integer('user_id').references('users.id').onDelete('CASCADE');
    table.integer('mission_id').references('missions.id').onDelete('CASCADE');
    table.json('answers');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('reviews')

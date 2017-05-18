
exports.up = knex =>
  knex.schema.createTable('classes', table => {
    table.increments();
    table.integer('teacher_id').reference('teachers.id');
    table.timestamp(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('classes')

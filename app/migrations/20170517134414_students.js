
exports.up = knex =>
  knex.schema.createTable('students', table => {
    table.increments();
    table.string('name');
    table.boolean('isAdmin');
    table.integer('teacher_id').references('teachers.id').onDelete('CASCADE');
    table.integer('class_id').reference('classes.id').onDelete('CASCADE');
    table.timestamp(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('students')

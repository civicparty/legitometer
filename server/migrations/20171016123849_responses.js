
exports.up = knex =>
  knex.schema.createTable('responses', table => {
    table.increments('id');
    table.integer('review_id').references('reviews.id').onDelete('CASCADE');
    table.string('question');
    table.string('questionType');
    table.string('response');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('responses')

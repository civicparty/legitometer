
exports.up = knex =>
  knex.schema.createTable('reviews', table => {
    table.increments();


    table.timestamp(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('reviews')

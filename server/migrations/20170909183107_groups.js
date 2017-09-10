
exports.up = knex =>
  knex.schema.createTable('groups', table => {
    table.increments('id');
    table.integer('review_id').references('reviews.id').onDelete('CASCADE');
    table.string('group_name');
    table.string('name');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('groups')


// REVIEWS TABLE
// id
// user_id (teacher… is this necessary since mission table has user_id)
// mission_id
// answers (JSON)

// GROUPS TABLE
// id
// review_id
// group_name
// name

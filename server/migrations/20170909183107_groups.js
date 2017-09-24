
exports.up = knex =>
  knex.schema.createTable('groups', table => {
    table.increments('id');
    table.string('group_name');
    table.string('name');
    table.timestamps(true, true);
  })


exports.down = knex =>
  knex.schema.dropTable('groups')


// REVIEWS TABLE
// id
// group_id
// mission_id
// answers (JSON)

// GROUPS TABLE
// id
// group_name
// name

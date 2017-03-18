
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name')
    table.string('user_type')
    //...
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};

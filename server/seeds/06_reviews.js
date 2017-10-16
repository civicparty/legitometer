
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {group_id: 1,
          mission_id: 1,
        },
        {group_id: 2,
          mission_id: 3,
        }
      ]);
    });
};

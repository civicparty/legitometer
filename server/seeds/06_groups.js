
exports.seed = knex =>
  // Deletes ALL existing entries
  knex('groups').del()
    .then(() =>
    knex('groups').insert([
      {review_id: 1,
        group_name: 'Team 1',
        name: 'Student 1'
      }, {
        review_id: 1,
        group_name: 'Team 1',
        name: 'Student 2'
      }, {
        review_id: 1,
        group_name: 'Team 1',
        name: 'Student 3'
      }
    ])
  )
